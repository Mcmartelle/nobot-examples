const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const ZLIB_BEST_COMPRESSION = 9;
// create a file to stream archive data to.
const zipPath = path.join(__dirname, 'files.zip');
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', {
  zlib: { level: ZLIB_BEST_COMPRESSION }
});

output.on('close', () => {
  console.log(`Total bytes: ${archive.pointer()}`);
  console.log('archiving has now finished');
});
