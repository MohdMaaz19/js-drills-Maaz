import { createUpperCaseFile,createLowerCaseFile,lowerCaseSentences,sortLowerCaseSentences,deleteFileNames } from "../problem2.js";

const inputFilePath = './inputData/lipsum.txt';
const fileNamesPath = './output/filenames.txt' 


async function fileModification(inputFilePath){
    try{
        await createUpperCaseFile(inputFilePath);
        const lowerCaseContent = await createLowerCaseFile(inputFilePath);
        const sentences = await lowerCaseSentences(lowerCaseContent);
        await sortLowerCaseSentences(sentences);
        await deleteFileNames(fileNamesPath);        

    }catch(error){
        console.log(error)
    }
}

fileModification(inputFilePath);