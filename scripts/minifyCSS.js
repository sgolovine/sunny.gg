const uglifycss = require("uglifycss");
const path = require("path");
const fs = require("fs");

const config = { maxLineLen: 500, expandVars: true };

function minifyCSS() {
  const globalsPath = path.resolve(__dirname, "../src/globals.css");
  const resetPath = path.resolve(__dirname, "../src/reset.css");
  const stylesPath = path.resolve(__dirname, "../src/styles.css");

  const globalOutPath = path.resolve(__dirname, "../dist/globals.css");
  const resetOutPath = path.resolve(__dirname, "../dist/reset.css");
  const stylesOutPath = path.resolve(__dirname, "../dist/styles.css");

  const globals = uglifycss.processFiles([globalsPath], config);
  const reset = uglifycss.processFiles([resetPath], config);
  const styles = uglifycss.processFiles([stylesPath], config);

  fs.writeFileSync(globalOutPath, globals);
  fs.writeFileSync(resetOutPath, reset);
  fs.writeFileSync(stylesOutPath, styles);
}

module.exports = {
  minifyCSS
};
