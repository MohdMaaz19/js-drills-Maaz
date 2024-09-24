import * as fs from "fs/promises"; 
import path from "path";


function fileModification(inputFilePath){

    // Read the given file `lipsum.txt`
    fs.readFile(inputFilePath, 'utf8')

    .then((content) => {
    // Convert the content to uppercase and write it to a new file
    const upperContent = content.toUpperCase();
    const upperFile = 'uppercase_lipsum.txt';
    
    return fs.writeFile(upperFile, upperContent)
        .then(() => fs.appendFile('./output/filenames.txt', upperFile + '\n'))
        .then(() => upperContent);
    })

    .then((upperContent) => {
    // Convert the uppercase content to lowercase, split into sentences, and write to a new file
    const lowerContent = upperContent.toLowerCase();
    const sentences = lowerContent.split('.').filter(Boolean).join('.\n');
    const lowerFile = 'lowercase_sentences.txt';
    
    return fs.writeFile(lowerFile, sentences)
        .then(() => fs.appendFile('./output/filenames.txt', lowerFile + '\n'));
    })

    .then(() => {
    // Read both new files, sort the content, and write it to another file
    return Promise.all([
        fs.readFile('uppercase_lipsum.txt', 'utf8'),
        fs.readFile('lowercase_sentences.txt', 'utf8')
    ]);
    })

    .then(([upperContent, lowerContent]) => {
    const allContent = `${upperContent}\n${lowerContent}`;
    const sortedContent = allContent.split('\n').sort().join('\n');
    const sortedFile = 'sorted_content.txt';
    
    return fs.writeFile(sortedFile, sortedContent)
        .then(() => fs.appendFile('./output/filenames.txt', sortedFile + '\n'));
    })

    .then(() => {
    // Read `filenames.txt` and delete all files listed in it
    return fs.readFile('./output/filenames.txt', 'utf8');
    })

    .then((filenames) => {
    const filesToDelete = filenames.split('\n').filter(Boolean);
    
    // Delete files simultaneously
    const deletePromises = filesToDelete.map(file => fs.unlink(file));
    return Promise.all(deletePromises);
    })

    .then(() => {
    console.log('All operations completed successfully.');
    })
    .catch((error) => {
    console.error('Error:', error);
    });

}
export { fileModification };