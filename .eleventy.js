const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
