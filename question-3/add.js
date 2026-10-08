// Import the file system and path modules
const fs = require('fs');
const path = require('path');

// Build the Logs folder path from the current directory
const logsDir = path.join(process.cwd(), 'Logs');

// Create the Logs folder if it does not exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Move the process into the Logs folder
process.chdir(logsDir);

// Create 10 log files
for (let i = 0; i < 10; i++) {
  // Make the file name
  const fileName = `log${i}.txt`;
  // Write some text into the file
  fs.writeFileSync(fileName, `This is log file number ${i}\n`);
  // Print the file name
  console.log(fileName);
}