
import * as fs from 'fs';
import * as readline from 'readline';
import * as CsvParse from 'csv-parse';
import * as xlsx from "xlsx";
import * as convert from 'xml-js';



// export const textFileProcessor = async (request:any) =>{
//     //let headers = request.headers;
//     // request from parent function will be like
    
    
//     const fileStream = fs.createReadStream(request.FilePath);
      
//         const rl = readline.createInterface({
//         input: request.FileData,
//         crlfDelay: Infinity
//         });
  
//         let data  = [];
//         for await (const line of rl) {
//             var wordArray:any = {};
//         for (let i = 0; i < request.Headers.length; i++) {
//           var obj  = request.Headers[i];
//             wordArray[obj.title] = line.substring(obj.start,obj.length+obj.start); 
//         }
//         data.push(wordArray);
//     }
//         var object = JSON.stringify(data);
//         return (JSON.parse(object));
// }

export const csvFileProcessor = (request:any) =>{
        console.log("Inside Processing 1 : ",request);
    
        var results:any;

        let HeaderRequest  = [];

        for (let hindex = 0; hindex < request.Headers.length; hindex++) {
              HeaderRequest.push(request.Headers[hindex].Title);
        }

        console.log("Inside Processing 2: ",request);
       //const fileContent = fs.readFileSync(request.FilePath, { encoding: 'utf-8' });
      
        // CsvParse.parse(request.FileData, {
        //   delimiter: ',',
        //   fromLine:2,
        //   on_record: (line:any, context) => {
        //     for (let hd = 0; hd < HeaderRequest.length; hd++) {
        //       if(!(line[request.Headers[hd].Label] == line[request.Headers[hd].Title])){
        //         line[request.Headers[hd].Label] = line[request.Headers[hd].Title];
        //                       delete line[request.Headers[hd].Title];
        //       }
              
        //     }
        //     //console.log(line);
        //     return line;
        //   },
        //   columns: HeaderRequest,
        // }, (error, result: any) => {
        //   if (error) {
        //     console.error(error);
        //   }
        //   const resultJSON = JSON.stringify(result);
        //   results = resultJSON;
        //   console.log(JSON.parse(resultJSON));
        // });

        return 'Hello';
}

export const xlsxFileProcessor = (request:any) =>{
      let HeaderRequest  = [];
      let outputResult:any = [];
        for (let hindex = 0; hindex < request.Headers.length; hindex++) {
              HeaderRequest.push(request.Headers[hindex].Title);
        }
    var workbook = xlsx.readFile(request.FilePath);
    var sheetNames = workbook.SheetNames;
    var sheetIndex = 1;
    var data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex-1]],{header:HeaderRequest});

    for (let i = 0; i < data.length; i++) {

      let object:any = data[i];

      for (let hd = 0; hd < HeaderRequest.length; hd++) {

        if(!(object[request.Headers[hd].Label] == object[request.Headers[hd].Title])){
          object[request.Headers[hd].Label] = object[request.Headers[hd].Title];
                        delete object[request.Headers[hd].Title];
        }
        
      }

      outputResult.push(object);
    }
    const resultJSON = JSON.stringify(outputResult);
    return (JSON.parse(resultJSON));
}

export const xmlFileProcessor = (request:any) =>{
      let HeaderRequest  = [];
      let outputResult:any = [];
        for (let hindex = 0; hindex < request.Headers.length; hindex++) {
              HeaderRequest.push(request.Headers[hindex].Title);
        }

        var FilePathArray = request.FilePath.split('\\');
        var file  = FilePathArray[FilePathArray.length - 1].split('.');

        var fileName = file[0];
        


            const fileContent = fs.readFileSync(request.FilePath, { encoding: 'utf-8' });

            var options = {compact: true, ignoreComment: true, spaces: 4, ignoreAttrs:false};

            var result:any = convert.xml2js(fileContent, options);

            let LastIndex:any =  Object.values(result[fileName])[Object.values(result[fileName]).length - 1];
              for (let row = 0; row < LastIndex.length; row++) {
                var wordArray:any = {};
                for (let column = 0; column < HeaderRequest.length; column++) {
                  var obj  = request.Headers[column];
                  wordArray[obj.Label] = LastIndex[row][obj.Title]._text;
                  
                }

                outputResult.push(wordArray);
              }
              console.log(outputResult);

              return outputResult;

}