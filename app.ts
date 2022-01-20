import {textFileProcessor,csvFileProcessor,xlsxFileProcessor} from "./src/fileprocessor"
import * as path from 'path';


const textFilePath = path.resolve(__dirname, 'files/MEDICL.TXT');
console.log(textFileProcessor(textFilePath));


// const csvFilePath = path.resolve(__dirname, 'files/Cavendish.csv');
// console.log("Output : ",csvFileProcessor(csvFilePath));

// const xlsxFilePath = path.resolve(__dirname, 'files/process.xlsx');
// console.log("Output : ",xlsxFileProcessor(xlsxFilePath));