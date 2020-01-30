const posthtml = require("posthtml");
const htmlnano = require("htmlnano");
const fs = require("fs");
const path = require("path");

const htmlNanoOpts = {
  removeEmptyAttributes: true,
  collapseWhitespace: "all",
  removeComments: "all"
};

function minifyHTML() {
  const htmlPath = path.resolve(__dirname, "../src/index.html");
  const htmlOutPath = path.resolve(__dirname, "../dist/index.html");

  // Read in raw html
  const rawHtml = fs.readFileSync(htmlPath).toString();

  // Minify It
  posthtml([htmlnano(htmlNanoOpts)])
    .process(rawHtml)
    .then(res => {
      fs.writeFileSync(htmlOutPath, res.html);
    })
    .catch(err => console.err(err));
}

module.exports = {
  minifyHTML
};
