const htmlnano = require("htmlnano");
const fs = require("fs");
const path = require("path");
const uglifycss = require("uglifycss");

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

// Copy CSS

var uglified = uglifycss.processFiles([csspath], {
  maxLineLen: 500,
  expandVars: true
});

fs.writeFileSync(cssOutPath, uglified);
console.log("Successfully wrote CSS");

// Copy images
fs.copyFile(
  path.resolve(__dirname, "src/logo.png"),
  path.resolve(__dirname, "build/logo.png"),
  err => {
    if (err) {
      console.log("An error has occurred copying logo.png");
      return;
    }
    console.log("copied logo.png");
  }
);
