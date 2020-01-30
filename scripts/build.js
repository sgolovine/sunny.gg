const path = require("path");
const fs = require("fs");
const uglifycss = require("uglifycss");
const posthtml = require("posthtml");
const htmlnano = require("htmlnano");

const cssConfig = { maxLineLen: 500, expandVars: true };

const htmlConfig = {
  removeEmptyAttributes: true,
  collapseWhitespace: "all",
  removeComments: "all"
};

const destPath = path.resolve(__dirname, "../dist");

function setup() {
  fs.mkdirSync(destPath);
}

function copyFiles() {
  const srcPath = path.resolve(__dirname, "../src/");
  const destPath = path.resolve(__dirname, "../dist/");
  fs.copyFileSync(
    path.resolve(srcPath, "profile.svg"),
    path.resolve(destPath, "profile.svg")
  );
  fs.copyFileSync(
    path.resolve(srcPath, "contact.vcf"),
    path.resolve(destPath, "contact.vcf")
  );
}

function minifyCSS() {
  const globalsPath = path.resolve(__dirname, "../src/globals.css");
  const resetPath = path.resolve(__dirname, "../src/reset.css");
  const stylesPath = path.resolve(__dirname, "../src/styles.css");

  const globalOutPath = path.resolve(__dirname, "../dist/globals.css");
  const resetOutPath = path.resolve(__dirname, "../dist/reset.css");
  const stylesOutPath = path.resolve(__dirname, "../dist/styles.css");

  const globals = uglifycss.processFiles([globalsPath], cssConfig);
  const reset = uglifycss.processFiles([resetPath], cssConfig);
  const styles = uglifycss.processFiles([stylesPath], cssConfig);

  fs.writeFileSync(globalOutPath, globals);
  fs.writeFileSync(resetOutPath, reset);
  fs.writeFileSync(stylesOutPath, styles);
}

function minifyHTML() {
  const htmlPath = path.resolve(__dirname, "../src/index.html");
  const htmlOutPath = path.resolve(__dirname, "../dist/index.html");

  // Read in raw html
  const rawHtml = fs.readFileSync(htmlPath).toString();

  // Minify It
  posthtml([htmlnano(htmlConfig)])
    .process(rawHtml)
    .then(res => {
      fs.writeFileSync(htmlOutPath, res.html);
    })
    .catch(err => console.err(err));
}

function main() {
  try {
    setup();
  } catch (e) {
    console.log("[FAIL] Setting UP");
    console.error(e);
    return;
  } finally {
    console.log("[SUCCESS] Setting UP");
  }

  try {
    minifyHTML();
  } catch (e) {
    console.log("[FAIL] Minifying HTML");
    console.error(e);
    return;
  } finally {
    console.log("[SUCCESS] Minifying HTML");
  }

  try {
    minifyCSS();
  } catch (e) {
    console.log("[FAIL] Minifying CSS");
    console.error(e);
    return;
  } finally {
    console.log("[SUCCESS] Minifying CSS");
  }

  try {
    copyFiles();
  } catch (e) {
    console.error(e);
    console.log("[FAIL] Copying Files");
  } finally {
    console.log("[SUCCESS] Copying Files");
  }
}

main();
