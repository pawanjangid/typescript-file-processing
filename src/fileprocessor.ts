
import * as fs from 'fs';
import * as readline from 'readline';
import * as CsvParse from 'csv-parse';
import * as xlsx from "xlsx";

export const textFileProcessor = async (path:any) =>{
    const fileStream = fs.createReadStream(path);
      
        const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
        });
  
        let data  = [];
        for await (const line of rl) {
            var wordArray:any = {};
            var words = line.split(/\s{2,8}/);
            let newWords = words.filter((a) => a);
        for (let i = 0; i < newWords.length; i++) {
            let key = 'Title_'+i;
            wordArray[key] = newWords[i]; 
        }
        data.push(wordArray);
    }
        var object = JSON.stringify(data);
        console.log(JSON.parse(object));
}

export const csvFileProcessor = (path:any) =>{
    
        var results:any;
        //headers of csv file
        const headers = ['PIP CODE', 'CAV CODE', 'PRODUCT DESCRIPTION', 'PACK SIZE','CATEGORY'];
      
        //readt file form your lpath
        const fileContent = fs.readFileSync(path, { encoding: 'utf-8' });
      
        //now parse file into json..
        CsvParse.parse(fileContent, {
          delimiter: ',',
          fromLine:2,
        //   cast:(colmnValue,context) =>{
        //       if(context.column === 'geoNameId'){
        //           return parseInt(colmnValue,10);
        //       }
        //       return colmnValue;
        //   },
        //   on_record: (line, context) => {
        //       if (line.country !== 'India') {
        //         return;
        //       }
        
        //       return line;
        //     },
          columns: headers,
        }, (error, result: any) => {
          if (error) {
            console.error(error);
          }
      
          const resultJSON = JSON.stringify(result);
      
          results = resultJSON;
          console.log(JSON.parse(resultJSON));
        });
}

export const xlsxFileProcessor = (path:any) =>{
    var workbook = xlsx.readFile(path);
    var sheetNames = workbook.SheetNames;
    var sheetIndex = 1;
    var data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex-1]],{header:["name","name2","minOccurs","maxOccurs","name3","type"]});
    return data;
}