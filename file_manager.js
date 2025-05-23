const fs = require('fs');
const path = require('path');

function addFileToGitIgnore(fileName) {
    const gitIgnorePath = path.join(__dirname, '.gitignore');
    fs.appendFileSync(gitIgnorePath, `${fileName}\n`, 'utf8');
    console.log(`File ${fileName} added to .gitignore.`);
}
