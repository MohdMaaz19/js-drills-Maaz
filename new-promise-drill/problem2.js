/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

import { error } from 'console';
import fs from 'fs'
import path, { resolve } from 'path'

const inputFilePath = './inputData/lipsum.txt';
const fileNamesPath = './output/fileNames.txt';

//Function to read a file

function readFile(inputFilePath){
    return new Promise((resolve,reject)=>{
        const inputFileContent = fs.readFile(inputFilePath,'utf8',(error,content)=>{
            if(error){
                reject(error)
            }else{
                // console.log(content)
                resolve(content)             
            }
        })
    })
}

function writeFile(filePath,fileContent){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,fileContent,(error=>{
            if(error){
                reject(error);
            }else{
                resolve("File written successfully")
            }
        }))
    })
}

function appendFile(filePath,fileContent){
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath,fileContent,(error)=>{
            if(error){
                console.log(error)
            }else{
                resolve("Content added to the file successfully")
            }
        })
    })
}

//Function to create uppercase file
function createUpperCaseFile(inputFilePath) {
    return new Promise((resolve, reject) => {
            fs.readFile(inputFilePath,'utf8',(error,content)=>{
                if(error){
                    console.log(error);
                    reject(error)
                }else{
                    const upperCaseContent = content.toUpperCase();  // convert to uppercase
                    const upperCaseFilePath = './output/upperCaseFile.txt'
                    fs.writeFile(upperCaseFilePath,upperCaseContent,(error=>{
                        if(error){
                            console.log(error);
                            reject(error)
                        }else{
                            fs.writeFile(fileNamesPath,'upperCaseFile.txt',(error=>{
                                if(error){
                                    console.log(error);
                                    reject(error);
                                }else{
                                    resolve("Uppercase file created");
                                }
                            }));
                        }
                    }));
                }
            })
    });
}

//Function to create lowercase file

function createLowerCaseFile(inputFilePath){
    return new Promise((resolve, reject) => {
        fs.readFile(inputFilePath,'utf8',(error,content)=>{
            if(error){
                console.log(error);
                reject(error)
            }else{
                const lowerCaseContent = content.toUpperCase(); 
                const lowerCaseFilePath = './output/lowerCaseFile.txt'
                fs.writeFile(lowerCaseFilePath,lowerCaseContent,(error=>{
                    if(error){
                        console.log(error);
                        reject(error)
                    }else{
                        fs.append(fileNamesPath,'lowerCaseFile.txt',(error=>{
                            if(error){
                                console.log(error);
                                reject(error);
                            }else{
                                resolve("Lowercase file created");
                            }
                        }));
                    }
                }));
            }
        })
    });
}

function lowerCaseSentences(lowerCaseFilePath){
    return new Promise((resolve, reject) => {
        fs.readFile(lowerCaseFilePath,'utf8',(error,content)=>{
            if(error){
                console.log(error);
                reject(error)
            }else{
                const lowerCaseSentences = content.match(/[^?!.]+[?.!]/g)
                                                  .filter(Boolean)
                                                  .map((sentence)=>sentence.trim())
                                                  .join('\n');

                const sentencesFilePath = './output/lowerCaseSentences.txt';

                fs.writeFile(sentencesFilePath,lowerCaseSentences,(error=>{
                    if(error){
                        console.log(error);
                        reject(error)
                    }else{
                        fs.append(fileNamesPath,'lowerCaseFile.txt',(error=>{
                            if(error){
                                console.log(error);
                                reject(error);
                            }else{
                                resolve("Lowercase sentences splitted into a file.");
                            }
                        }));
                    }
                }));
            }
        })
    });
}

function sortLowerCaseSentences(sentences){
    return new Promise((resolve,reject)=>{

        const sortedSentences = sentences.split('\n').sort().join('\n');
        const sortedSentencesPath = './output/sortedSentences.txt';

        fs.writeFile(sortedSentences,sortedSentencesPath((error)=>{
            if(error){
                console.log(error);
                reject(error);
            }else{
                fs.appendFile(fileNamesPath,'sortedSentences.txt',(error)=>{
                    if(error){
                        console.log(error);
                        reject(error);
                    }else{
                        resolve("File with sorted sentences created");
                    }
                });
            }
        }))

    })
}

function deleteFiles(fileNamesPath){
    return new Promise((resolve,reject)=>{

        const filesToDelete = fileNamesPath.split('\n');
        const deleteFilesPromise = filesToDelete.map((file)=>{
            const filePath = path.join('./output',file)
            fs.unlink(filePath)
        })
        return Promise.all(deleteFilesPromise);
    })
}

createUpperCaseFile(inputFilePath);
