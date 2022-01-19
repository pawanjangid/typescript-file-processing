import * as xlsx from "xlsx";
var workbook = xlsx.readFile('files/process.xlsx');
var sheetNames = workbook.SheetNames;
var sheetIndex = 1;
var data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex-1]],{header:["name","name2","minOccurs","maxOccurs","name3","type"]});

console.log(data);