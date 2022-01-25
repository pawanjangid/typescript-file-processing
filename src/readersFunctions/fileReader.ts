import * as CsvParse from 'csv-parse';
import * as xlsx from "xlsx";
import * as convert from 'xml-js';
import * as Excel from 'exceljs';
import console from 'console';

export const textFileProcessor = async (request:any) =>{
  return new Promise((resolve, reject) => {
    request.fileData.on('data', async function (chunk:any) {
      const inputdata = Buffer.from(chunk).toString('utf8');
        const rl = inputdata.split('\r\n');
        let data  = [];
        for await (const line of rl) {
            var wordArray:any = {};
        for (let i = 0; i < request.headers.length; i++) {
          var obj  = request.headers[i];
            wordArray[obj.title] = line.substring(obj.start,obj.length+obj.start); 
        }
        data.push(wordArray);
    }
        var object = JSON.stringify(data);
        resolve(JSON.parse(object));
    });
  })
      
}

export const csvFileProcessor = (request:any) =>{
  return new Promise((resolve, reject) => {
    request.fileData.on('data', async function (chunk:any) {
      const inputdata = Buffer.from(chunk).toString('utf8');
        var results:any;
        let HeaderRequest  = [];

        for (let hindex = 0; hindex < request.Headers.length; hindex++) {
              HeaderRequest.push(request.Headers[hindex].Title);
        }

        CsvParse.parse(inputdata, {
          delimiter: ',',
          fromLine:2,
          on_record: (line:any, context) => {
            for (let hd = 0; hd < HeaderRequest.length; hd++) {
              if(!(line[request.Headers[hd].Label] == line[request.Headers[hd].Title])){
                line[request.Headers[hd].Label] = line[request.Headers[hd].Title];
                              delete line[request.Headers[hd].Title];
              } 
            }
            return line;
          },
          columns: HeaderRequest,
        }, (error, result: any) => {
          if (error) {
            reject(error);
          }
          const resultJSON = JSON.stringify(result);
          results = resultJSON;
          resolve(JSON.parse(resultJSON));
        });
      })
    })
}

export const xlsxFileProcessor = (request:any) =>{
  return new Promise((resolve, reject) => {
            let headerKeys:any = [];
            let rows:any = [];
          const workbook = new Excel.Workbook();

          workbook.xlsx.read(request.fileData).then(function(workbook){
          const worksheet = workbook.getWorksheet('Sheet1');
             
             worksheet.eachRow({ includeEmpty: false}, function(row:any,rowNumber) {
                  if(rowNumber===1){
                    let rowOne = row.values;
                    for (let hindex = 0; hindex < request.headers.length; hindex++) {
                        if(rowOne.indexOf(request.headers[hindex].title) > -1){
                          headerKeys[request.headers[hindex].label] = rowOne.indexOf(request.headers[hindex].title);
                        }else{
                          reject(new Error("Header "+request.headers[hindex].title+" not found in targeted excel file"));
                        }
                    }
                  }else{
                  let Line:any = {};
                  for (var key in headerKeys) {
                      Line[key] = row.values[headerKeys[key]];
                  }
                    rows.push(Line); 
                  }
              });
              const resultJSON = JSON.stringify(rows);
              resolve(JSON.parse(resultJSON));
          });

        });
}

export const xmlFileProcessor = (request:any) =>{
  
  return new Promise((resolve, reject) => {
    request.fileData.on('data', async function (chunk:any) {
      const inputdata = Buffer.from(chunk).toString('utf8');
      let HeaderRequest  = [];
      let outputResult:any = [];
        for (let hindex = 0; hindex < request.Headers.length; hindex++) {
              HeaderRequest.push(request.Headers[hindex].Title);
        }
         var file  = request.FileName.split('.');
        var fileName = file[0];

            var options = {compact: true, ignoreComment: true, spaces: 4, ignoreAttrs:false};

            var result:any = convert.xml2js(inputdata, options);
            let LastIndex:any =  Object.values(result[fileName])[Object.values(result[fileName]).length - 1];
              for (let row = 0; row < LastIndex.length; row++) {
                var wordArray:any = {};
                for (let column = 0; column < HeaderRequest.length; column++) {
                  var obj  = request.Headers[column];
                  wordArray[obj.Label] = LastIndex[row][obj.Title]._text;
                }
                outputResult.push(wordArray);
              }
              resolve(outputResult);
    });
  });
}