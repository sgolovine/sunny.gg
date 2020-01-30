// Analyze input and output sizes
const path = require("path");
const fs = require("fs");

function _getSize(filePath) {
  try {
    const fileSizeInBytes = fs.statSync(filePath).size;
    if (fileSizeInBytes >= 1000000) {
      return `${(fileSizeInBytes / 1000000).toFixed(2)} mb`;
    }
    if (fileSizeInBytes >= 1000) {
      return `${(fileSizeInBytes / 1000).toFixed(2)} kb`;
    }
    if (fileSizeInBytes <= 1000) {
      return `${fileSizeInBytes.toFixed(2)} bytes`;
    }
  } catch (e) {
    console.log(e);
  }
}

// Inputs
function analyze(dirPath) {
  const files = fs.readdirSync(dirPath);
  files.forEach(item => {
    const filePath = path.resolve(dirPath, item);
    const fileSize = _getSize(filePath);
    console.log(`${filePath} - ${fileSize}`);
  });
}

const distPath = path.resolve(__dirname, "../dist");
const srcPath = path.resolve(__dirname, "../src");

console.log("--- [ Source code ] ----");
analyze(srcPath);

console.log("--- [ Minified Code code ] ----");
analyze(distPath);
