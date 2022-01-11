const ghPages = process.env.DEPLOY_TARGET === "gh-pages";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const nextOptimizedImages = require("next-optimized-images");

const mdx = require("@next/mdx")();

module.exports = nextOptimizedImages(
  mdx({
    pageExtensions: ["js", "jsx", "tsx", "mdx"],
    basePath: ghPages ? basePath : "",
    assetPrefix: ghPages ? basePath : "",
  })
);
