const fs = require('fs').promises;
const path = require('path');

const chaincss = require("@melcanz85/chaincss");

try {
  // Process main.jcss and write to style.jcss
  chaincss.processor('./chaincss/chaincss.jcss', './src/style');
} catch (err) {
  console.error('Error processing chainCSS file:', err.stack);
  // Exit the process with a non-zero status code
  process.exit(1);
}

