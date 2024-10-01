/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/


import fs from 'fs';
import path from 'path';

//Create a new directory
function createDirectory(dirPath){

  return new Promise((resolve, reject)=>{
    fs.mkdir(dirPath,{recursive:true},(error)=>{

      if(error) 
        reject(error);
      else
        resolve("Directory created");
    });
  });
}

//Create random files
function createRandomJSONFiles(numberOfFiles,dirPath){
  const promises = [];

  for(let i=0 ;i<numberOfFiles;i++){
    const fileName = `file${i}.json`;
    const filePath = path.join(dirPath, fileName);
    const fileContent = `This is a randon content for ${fileName}`;

    const promise = new Promise((resolve,reject)=>{
      fs.writeFile(filePath,JSON.stringify(fileContent),(error)=>{
        if(error)
          reject(error)
        else
          resolve(`File created ${fileName}`);
      })
    })
    promises.push(promise);
  }

  return Promise.all(promises);
}

//Delete the created files
function deleteFiles(dirPath){
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath,(err,files)=>{
      if(err) 
        reject(err);

      const deleteFilesPromises = files.map((file)=>{
        const filePath = path.join(dirPath,file);
        return new Promise((resolve,reject)=>{
          fs.unlink(filePath,(err)=>{
            if(err)
              reject(err)
            else resolve(`${file} deleted`);
          })
        })
      })
      Promise.all(deleteFilesPromises)
          .then((results)=>resolve(results))
          .catch((err)=>reject(err))
    });
  })
}

export{createDirectory, createRandomJSONFiles,deleteFiles}