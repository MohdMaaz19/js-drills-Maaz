import { createDirectory,createRandomJSONFiles,deleteFiles } from "../problem1.js";

const dirPath = './output/randomJsonFiles';

createDirectory(dirPath)
    .then(() => createRandomJSONFiles(dirPath, 5))  // Create 5 random files
    .then((createResults) => {
        console.log('Files created:', createResults);
        return deleteFiles(dirPath);
    })
    .then((deleteResults) => console.log('Files deleted:', deleteResults))
    .catch((err) => console.error('Error:', err));
