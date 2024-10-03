const {default : fs} = await import ('fs/promises');
import path from 'path';

function fileModification(inputFilePath){

    return fs. readFile(inputFilePath,'utf8')
    .then((content)=>{
        const uppercaseContent = content.toUpperCase();
        const upperCaseFileName = './output/upperCaseContent.txt';
        return fs.writeFile(upperCaseFileName,uppercaseContent)
    })
    .then (()=>fs.writeFile('./output/filenames.txt','upperCaseContent.txt'+'\n'))

    .then(()=>{
        return fs. readFile(inputFilePath,'utf8')
    })

    .then((fileContent)=>{
        const lowerCaseContent = fileContent.toLowerCase();
        const lowerCaseFileName = './output/lowerCaseContent.txt';

        return fs.writeFile(lowerCaseFileName,lowerCaseContent)
        .then(()=>lowerCaseContent);
    })
    .then((lowerCaseContent)=>{
        return fs.appendFile('./output/filenames.txt','lowerCaseContent.txt'+'\n')
        .then(()=>lowerCaseContent)
    })
    .then((lowerCaseContent)=>{
        const sentences = lowerCaseContent.match(/[^.?!]+[.?!]/g)
        .filter(Boolean)
        .map((sentence)=>sentence.trim())
        .join('\n')

        return fs.writeFile('./output/lowerCaseSentences.txt',sentences)
        .then(()=>sentences);
        // fs.readFile('./lowerCaseSentences.txt','utf8')
    })
    .then((sentences)=>{
        return fs.appendFile('./output/filenames.txt','lowerCaseSentences.txt'+'\n')
        .then(()=>sentences)
    })

    .then((lowerCaseSentences)=>{

        const sortedSentences = lowerCaseSentences.split('\n').sort().join('\n')
        const sortedFileName = './output/sortedSentences.txt'
        return fs.writeFile(sortedFileName,sortedSentences)
    })
    .then(()=>fs.appendFile('./output/filenames.txt','sortedSentences.txt'+'\n'))
    .then(()=>{
        return fs.readFile('./output/filenames.txt','utf8')
    })
    .then((fileNames)=>{
        const filesToDelete = fileNames.split('\n').filter(Boolean);
        // console.log(filesToDelete);
        const createDeletePromise = filesToDelete.map((fileName)=>fs.unlink(path.join('./output',fileName)))
        return Promise.all(createDeletePromise);
    })
    .then(()=>console.log("All operation performed!!!"))
    .catch((error)=>console.error(error))
}

export{fileModification}