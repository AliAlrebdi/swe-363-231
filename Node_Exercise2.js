const { readFileSync, writeFileSync, read} = require("fs")

// Get the source and target directory paths from the command line arguments
const sourceDir = process.argv[2];
const targetDir = process.argv[3];

const readDir = readFileSync(sourceDir, 'utf8');
const writeDir = writeFileSync(targetDir, readDir);

console.log(readDir);

