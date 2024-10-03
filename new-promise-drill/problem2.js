/*
    Problem 2:
    
    Do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

import fs from 'fs';
import path from 'path';

const inputFilePath = './inputData/lipsum.txt';
const fileNamesPath = './output/fileNames.txt';

// Function to read a file
function readFile(inputFilePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(inputFilePath, 'utf8', (error, content) => {
            if (error) {
                reject(error);
            } else {
                resolve(content);
            }
        });
    });
}

// Function to write a file
function writeFile(filePath, fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, fileContent, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve("File written successfully");
            }
        });
    });
}

// Function to append content to a file
function appendFile(filePath, fileContent) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, fileContent + '\n', (error) => {
            if (error) {
                reject(error);
            } else {
                resolve("Content added to the file successfully");
            }
        });
    });
}

// Function to create an uppercase file
function createUpperCaseFile(inputFilePath) {
    return readFile(inputFilePath)
        .then(content => {
            const upperCaseContent = content.toUpperCase();  
            const upperCaseFilePath = './output/upperCaseFile.txt';
            return writeFile(upperCaseFilePath, upperCaseContent);
        })
        .then(() => writeFile(fileNamesPath, 'upperCaseFile.txt\n'))
        .then(() => "Uppercase file created");
}

// Function to create a lowercase file
function createLowerCaseFile(inputFilePath) {
    return readFile(inputFilePath)
        .then(content => {
            const lowerCaseContent = content.toLowerCase();  
            const lowerCaseFilePath = './output/lowerCaseFile.txt';
            return writeFile(lowerCaseFilePath, lowerCaseContent);
        })
        .then(() => appendFile(fileNamesPath, 'lowerCaseFile.txt'))
        .then(() => "Lowercase file created");
}

// Function to extract and save lowercase sentences
function lowerCaseSentences(lowerCaseFilePath) {
    return readFile(lowerCaseFilePath)
        .then(content => {
            const lowerCaseSentences = content.match(/[^?!.]+[?.!]/g)
                .filter(Boolean)
                .map(sentence => sentence.trim())
                .join('\n');
            const sentencesFilePath = './output/lowerCaseSentences.txt';
            return writeFile(sentencesFilePath, lowerCaseSentences);
        })
        .then(() => appendFile(fileNamesPath, 'lowerCaseSentences.txt'))
        .then(() => "Lowercase sentences splitted into a file.");
}

// Function to sort lowercase sentences
function sortLowerCaseSentences(sentences) {
    const sortedSentences = sentences.split('\n').sort().join('\n');
    const sortedSentencesPath = './output/sortedSentences.txt';

    return writeFile(sortedSentencesPath, sortedSentences)
        .then(() => appendFile(fileNamesPath, 'sortedSentences.txt'))
        .then(() => "File with sorted sentences created");
}

// Function to delete files based on the names in fileNames.txt
function deleteFiles(fileNamesPath) {
    return readFile(fileNamesPath)
        .then(fileNames => {
            const filesToDelete = fileNames.split('\n').filter(Boolean);
            const deletePromises = filesToDelete.map(file => {
                const filePath = path.join('./output', file);
                return new Promise((resolve, reject) => {
                    fs.unlink(filePath, error => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(`Deleted file: ${filePath}`);
                        }
                    });
                });
            });
            return Promise.all(deletePromises);
        });
}


export {createUpperCaseFile,createLowerCaseFile,lowerCaseSentences,readFile,sortLowerCaseSentences,deleteFiles} 
