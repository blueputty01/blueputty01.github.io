const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextOptimizedImages = require("next-optimized-images");

const mdx = require("@next/mdx")();

module.exports = nextOptimizedImages(
  mdx({
    // webpack: (config, { isServer }) => {
    //   if (!isServer) {
    //     config.node = {
    //       fs: "empty",
    //     };
    //   }
    //   return config;
    // },
    pageExtensions: ["js", "jsx", "mdx"],
    basePath: ghPages ? "./blog/" : "",
    assetPrefix: ghPages ? "./blog/" : "",
  })
);
