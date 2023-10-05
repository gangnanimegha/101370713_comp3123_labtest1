const fs = require('fs');
const path = require('path');

const logsDirectory = 'Logs';

// Function to remove files and directory
const removeLogs = () => {
    // Check if the Logs directory exists
    if (fs.existsSync(logsDirectory)) {
        // Read the files in the Logs directory
        const files = fs.readdirSync(logsDirectory);

        // Output the file names to console
        files.forEach((file) => {
            console.log(`delete files...${file}`);
        });

        // Remove the files
        files.forEach((file) => {
            const filePath = path.join(logsDirectory, file);
            fs.unlinkSync(filePath);
        });

        // Remove the Logs directory
        fs.rmdirSync(logsDirectory);
    } else {
        console.log('Logs directory does not exist.');
    }
};

// Execute the function
removeLogs();
