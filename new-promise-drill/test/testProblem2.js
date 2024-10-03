import {createUpperCaseFile,createLowerCaseFile,lowerCaseSentences,readFile,sortLowerCaseSentences,deleteFiles} from '../problem2.js'

const inputFilePath = './inputData/lipsum.txt';
const fileNamesPath = './output/fileNames.txt';

createUpperCaseFile(inputFilePath)
    .then(() => createLowerCaseFile(inputFilePath))
    .then(() => lowerCaseSentences('./output/lowerCaseFile.txt'))
    .then(() => readFile('./output/lowerCaseSentences.txt'))
    .then(content => sortLowerCaseSentences(content))
    .then(() => deleteFiles(fileNamesPath))
    .then(() => console.log("All operations completed successfully"))
    .catch(error => console.error(error));