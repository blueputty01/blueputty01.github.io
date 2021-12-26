import Layout from "../components/layout";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getAllPostsPath, getPostData } from "../lib/getPageData.js";

const components = {
  h1: (props) => (
    <h1
      style={{
        color: "black",
        margin: "1vh 0 1vh 0",
      }}
      {...props}
    />
  ),

  p: (props) => (
    <p
      style={{
        color: "#000000e6",
        margin: "0vh 0 1vh 0",
      }}
      {...props}
    />
  ),
};

export default function Blog({ postMetadata, postContent }) {
  return (
    <Layout>
      <Head>
        <title>{postMetadata.title}</title>
      </Head>
      <div className="blog-content">
        <h1>{postMetadata.title}</h1>
        <p>
          <i>Last updated {postMetadata.date}</i>
        </p>
        <MDXRemote {...postContent} components={components} />
      </div>

      <style jsx>{`
        .blog-content {
          display: flex;
          flex: 100%;
          flex-direction: column;
          max-width: 80rem;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const mdxSource = await serialize(postData.content);
  return {
    props: {
      postMetadata: postData.metadata,
      postContent: mdxSource,
      id: params.id,
    },
  };
}
