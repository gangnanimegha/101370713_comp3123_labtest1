const fs = require('fs');
const path = require('path');

const logsDirectory = 'Logs';

// Function to create Logs directory, change current process, and create log files
const createLogs = () => {
    // Create the Logs directory if it does not exist
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
    }

    // Change the current process to the new Logs directory
    process.chdir(logsDirectory);

    // Create 10 log files and write some text into the file
    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `Content for ${fileName}`);
        console.log(fileName);
    }

    // Output the files names to console
};

// Execute the function
createLogs();
