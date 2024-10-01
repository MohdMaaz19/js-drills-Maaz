/*
    Problem 1:
    
    Do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/
import { rejects } from "assert";
import * as fs from "fs/promises"; // Importing promises version of fs
import path from "path";

const dirPath = './randomFiles'
async function createDirectory(dirPath) {

  try {
      await fs.mkdir(dirPath, { recursive: true });
      console.log("Directory created");
  } catch (error) {
      console.log("Error in creating directory:", error);
  }
}

async function createRandomFiles(){
  try{
      const fileName = ['file1.txt','file2.txt','file3.txt'];
      
      const createFilesPromises = fileName.map((file)=>{
        const filePath = path.join(dirPath,file);
        const fileData = `This is the random content for ${file}`
        return fs.writeFile(filePath,fileData);
      })

      await Promise.all(createFilesPromises);
      console.log("All file created")
  }catch (error){
    console.log(error)
  }
}

async function deleteFiles(){
  try {
    const fileList = await fs.readdir(dirPath);

    const deleteFilePromises = fileList.map((file)=>{
      const filePath = path.join(dirPath,file);
      return fs.unlink(filePath);
    })

    await Promise.all(deleteFilePromises)
    console.log("All files deleted");
  } catch (error) {
    console.log(error)
  }
}
createDirectory(dirPath)
.then(createRandomFiles)
.then(deleteFiles)