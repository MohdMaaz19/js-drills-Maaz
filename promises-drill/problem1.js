/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/
import * as fs from "fs/promises"; // Importing promises version of fs
import path from "path";

function createAndDeleteFiles(dirPath) {
  // const dirPath = './output/randomJSONFiles';
  const fileNames = ['file1.json', 'file2.json', 'file3.json']; // Example file names

  // Create directory (if not already exists)
  fs.mkdir(dirPath, { recursive: true })
    .then(() => {
      console.log('Directory created:', dirPath);

      // Create random JSON files
      const createFilesPromises = fileNames.map((fileName) => {
        const filePath = path.join(dirPath, fileName);
        const randomData = { number: Math.floor(Math.random() * 100) }; // Random JSON data
        return fs.writeFile(filePath, JSON.stringify(randomData, null, 2));
      });

      // Wait for all files to be created
      return Promise.all(createFilesPromises);
    })
    .then(() => {
      console.log('Files created successfully.');

      // Read the directory to get the list of files
      return fs.readdir(dirPath);
    })
    .then((filesInDirectory) => {
      // Delete all files in the directory
      const deleteFilesPromises = filesInDirectory.map((file) => {
        const filePath = path.join(dirPath, file);
        return fs.unlink(filePath);
      });

      // Wait for all files to be deleted
      return Promise.all(deleteFilesPromises);
    })
    .then(() => {
      console.log('All files deleted successfully.');
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}


export{createAndDeleteFiles}