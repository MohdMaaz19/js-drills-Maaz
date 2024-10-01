/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

// const {default : fs} = await import ('fs/promises'); 

// import path from "path";

// // Function to read a file
// async function readFile(filePath) {
//     return await fs.readFile(filePath, 'utf8');
// }

// // Function to write a file
// async function writeFile(filePath, content) {
//     return await fs.writeFile(filePath, content);
// }

// // Function to append to a file
// async function appendToFile(filePath, content) {
//     return await fs.appendFile(filePath, content);
// }

// // Function to create uppercase and lowercase files
// async function createUpperLowerFiles(inputFilePath) {
//     const content = await readFile(inputFilePath);
//     const upperContent = content.toUpperCase();
//     const upperFile = 'uppercase_lipsum.txt';
    
//     await writeFile(upperFile, upperContent);
//     await appendToFile('./output/filenames.txt', upperFile + '\n');

//     const lowerContent = upperContent.toLowerCase();
//     const sentences = lowerContent.split('.').filter(Boolean).join('.\n');
//     const lowerFile = 'lowercase_sentences.txt';

//     await writeFile(lowerFile, sentences);
//     await appendToFile('./output/filenames.txt', lowerFile + '\n');

//     return { upperFile, lowerFile };
// }

// // Function to sort content from both files and write to a new file
// async function sortAndWriteFiles(upperFile, lowerFile) {
//     const [upperFileContent, lowerFileContent] = await Promise.all([
//         readFile(upperFile),
//         readFile(lowerFile)
//     ]);
    
//     const allContent = `${upperFileContent}\n${lowerFileContent}`;
//     const sortedContent = allContent.split('\n').sort().join('\n');
//     const sortedFile = 'sorted_content.txt';
    
//     await writeFile(sortedFile, sortedContent);
//     await appendToFile('./output/filenames.txt', sortedFile + '\n');
    
//     return sortedFile;
// }

// // Function to delete files listed in filenames.txt
// async function deleteFilesFromList() {
//     const filenames = await readFile('./output/filenames.txt');
//     const filesToDelete = filenames.split('\n').filter(Boolean);
    
//     const deletePromises = filesToDelete.map(file => fs.unlink(file));
//     await Promise.all(deletePromises);
// }

// // Main function to manage the file modification process
// async function fileModification(inputFilePath) {
//     try {
//         const { upperFile, lowerFile } = await createUpperLowerFiles(inputFilePath);
//         const sortedFile = await sortAndWriteFiles(upperFile, lowerFile);
//         await deleteFilesFromList();
        
//         console.log('All operations completed successfully.');
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// export { fileModification };


const {default:fs} = await import ('fs/promises');
import path from 'path';

const fileNamesPath = './output/filenames.txt'

//Function to read a file
async function readFile(filePath){
    return await(fs.readFile(filePath,'utf8'))
}

//Function to write a file
async function writeFile(filePath,fileContent){
    return await(fs.writeFile(filePath,fileContent))
}

//Function to append to a file
async function appendFile(filePath,fileContent) {
    return await(fs.appendFile(filePath,fileContent))
}

//Function to create uppercase file
async function createUpperCaseFile(inputFilePath){  

    const inputFileContent = await readFile(inputFilePath);

    const upperCaseContent = inputFileContent.toUpperCase();
    const upperCaseFilePath = './output/upperCaseFile.txt';

    await writeFile(upperCaseFilePath,upperCaseContent);
    await writeFile(fileNamesPath,'upperCaseFile.txt'+'\n');

}

async function createLowerCaseFile(inputFilePath){

    const inputFileContent = await readFile(inputFilePath);

    const lowerCaseContent = inputFileContent.toLowerCase();
    const lowerCaseFilePath = './output/lowerCaseFile.txt';

    await writeFile(lowerCaseFilePath,lowerCaseContent);
    await appendFile(fileNamesPath,'lowerCaseFile.txt'+'\n');

    return lowerCaseContent;

    // const lowerCaseData = await readFile(lowerCaseFilePath)
    
}

async function lowerCaseSentences(lowerCaseContent){
    const sentences = lowerCaseContent.match(/[^.!?]+[.?!]/g)
                                      .filter(Boolean)
                                      .map((sentence)=>sentence.trim())
                                      .join('\n')
                                    
    const sentencesFilePath = './output/lowerCaseSentences.txt';

    await writeFile(sentencesFilePath,sentences); 
    await appendFile(fileNamesPath,'lowerCaseSentences.txt\n');
    return sentences;
}

async function sortLowerCaseSentences(sentences){
    const sortedSentences = sentences.split('\n').sort().join('\n');
    const sortedSentencesPath = './output/sortedSentences.txt'
    await writeFile(sortedSentencesPath,sortedSentences);
    await appendFile(fileNamesPath,'sortedSentences.txt\n');
}

async function deleteFileNames(fileNamesPath){
    const fileNames = await readFile(fileNamesPath);
    const filesToDelete = fileNames.split('\n').filter(Boolean);
    const delteFileNamePromise = filesToDelete.map((file)=>{
        fs.unlink(path.join('./output',file));
    })
    await Promise.all(delteFileNamePromise);
}

export{createUpperCaseFile,createLowerCaseFile,lowerCaseSentences,sortLowerCaseSentences,deleteFileNames}

