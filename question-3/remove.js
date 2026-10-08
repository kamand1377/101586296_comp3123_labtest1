// Import the file system and path modules
const fs = require('fs');
const path = require('path');

// Build the Logs folder path from the current directory
const logsDir = path.join(process.cwd(), 'Logs');

// Check if the Logs folder exists
if (fs.existsSync(logsDir)) {
  // Get all file names in the folder
  const files = fs.readdirSync(logsDir);

  // Delete each file one by one
  files.forEach((file) => {
    // Print the file name being deleted
    console.log(`delete files...${file}`);
    // Delete the file
    fs.unlinkSync(path.join(logsDir, file));
  });

  // Remove the empty Logs folder
  fs.rmdirSync(logsDir);
} else {
  // Tell the user there is nothing to delete
  console.log('Logs directory does not exist');
}