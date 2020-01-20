const htmlnano = require("htmlnano");
const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const cssnano = require("cssnano");

const htmlpath = path.resolve(__dirname, "src/index.html");
const csspath = path.resolve(__dirname, "src/index.css");
const buildpath = path.resolve(__dirname, "build/");

const htmlOutPath = path.resolve(__dirname, "build/index.html");
const cssOutPath = path.resolve(__dirname, "build/index.css");
const htmlOptions = {
  removeEmptyAttributes: true,
  collapseWhitespace: "conservative"
};

// Create build directories
if (!fs.existsSync(buildpath)) {
  console.log("Creating build directory");
  fs.mkdirSync(buildpath);
}

// Minify the HTML
const html = fs.readFileSync(htmlpath).toString();
htmlnano
  .process(html, htmlOptions)
  .then(res => {
    fs.writeFileSync(htmlOutPath, res.html);
    console.log("successfully wrote html");
  })
  .catch(err => console.log(err));

const css = fs.readFileSync(csspath).toString();
postcss([css, cssnano])
  .process(css)
  .then(res => {
    fs.writeFileSync(cssOutPath, res);
    console.log(res);
  })
  .catch(err => console.log(err));
