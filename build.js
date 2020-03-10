const fs = require("fs");
const path = require("path");
const minify = require("html-minifier").minify;

const htmlCode = fs
  .readFileSync(path.resolve(__dirname, "./index.html"))
  .toString();

const minifiedHtmlCode = minify(htmlCode, {
  removeAttributeQuotes: true,
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  decodeEntities: true,
  html5: true,
  removeComments: true,
  minifyCSS: true
});

// Create build directory
fs.mkdirSync(path.resolve(__dirname, "./dist"));

// Write minified code to directory
fs.writeFileSync(
  path.resolve(__dirname, "./dist/index.html"),
  minifiedHtmlCode
);

// Copy vcard to directory
fs.copyFileSync(
  path.resolve(__dirname, "./contact.vcf"),
  path.resolve(__dirname, "./dist/contact.vcf")
);
