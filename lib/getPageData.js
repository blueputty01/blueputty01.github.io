const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// current 'posts' directory
const pageDirectory = path.join(process.cwd(), "/pages/pages");
const mdx_file_extension = ".mdx";

function getAllFilesInDirectory() {
  const fileNames = fs.readdirSync(pageDirectory);
  return fileNames.map((fileName) => {
    return path.parse(fileName);
  });
}

function getMdxFiles() {
  const allFiles = getAllFilesInDirectory();
  return allFiles.filter((parsedFile) => parsedFile.ext == mdx_file_extension);
}

export function getAllPostsPath() {
  const allMdxFiles = getMdxFiles();
  return allMdxFiles.map((parsedFile) => {
    return {
      params: {
        id: parsedFile.name,
      },
    };
  });
}

export function getPostsMetaData() {
  const allMdxFiles = getMdxFiles();

  const postsMetaData = allMdxFiles.map((parsedFile) => {
    const fullPath = path.join(pageDirectory, parsedFile.base);

    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // get metadata, content
    const { data, content } = matter(fileContents);
    let metadata = data;
    metadata["id"] = parsedFile.name;
    return metadata;
  });
  return postsMetaData;
}

export function getPostData(id) {
  const fullPath = path.join(pageDirectory, id + mdx_file_extension);

  // get MDX metadata and content
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // get metadata, content
  const { data, content } = matter(fileContents);

  let metadata = data;
  metadata["id"] = id;

  return { metadata: metadata, content: content };
}
