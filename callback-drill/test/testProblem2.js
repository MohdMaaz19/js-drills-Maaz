import { fileModification } from "../problem2.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the input file path for lipsum.txt
const inputFilePath = path.join(__dirname, "../inputData", 'lipsum.txt');

// Call the fileModification function
fileModification(inputFilePath);
