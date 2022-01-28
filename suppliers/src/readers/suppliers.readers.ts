import * as convert from 'xml-js';
import * as Excel from 'exceljs';

export const textFileProcessor = async (request: any) => {
  return new Promise((resolve, reject) => {
    if (request.fileExtension === 'TXT') {
      request.fileData.on('data', async function (chunk: any) {
        const inputdata = Buffer.from(chunk).toString('utf8');
        const rl = inputdata.split('\r\n');
        let data = [];
        for await (const line of rl) {
          var wordArray: any = {};
          //Processing data line by line according to to requested headers from handler..
          for (let i = 0; i < request.headers.length; i++) {
            var obj = request.headers[i];
            wordArray[obj.title] = line.substring(obj.start, obj.length + obj.start);
          }
          data.push(wordArray);
        }
        //Processing end of data
        //return json object as response
        var object = JSON.stringify(data);
        resolve(JSON.parse(object));
      });
    } else {
      reject(new Error("Make sure file extension is XML"));
    }
  })
}

export const csvFileProcessor = (request: any) => {
  return new Promise((resolve, reject) => {
    if (request.fileExtension === 'CSV') {
      request.fileData.on('data', async function (chunk: any) {
        const inputdata = Buffer.from(chunk).toString('utf8');
        let result: any = []
        let HeaderRequest:any = [];
        let headerKeys:any = [];
        //Header list in CSV only
        for (let hindex = 0; hindex < request.headers.length; hindex++) {
          HeaderRequest.push(request.headers[hindex].title);
        }
        //End

        //Split data line by line
        const rl = inputdata.split('\r\n');
        //getting first row of headers
        let rowOne = rl[0].split(',');
        for (let hindex = 0; hindex < request.headers.length; hindex++) {
          //Looking for headers position(Index) in CSV file.. and create an array of headerRequest Like requestedTitle => Index in CSV
          if (rowOne.indexOf(request.headers[hindex].title) > -1) {
            headerKeys[request.headers[hindex].label] = rowOne.indexOf(request.headers[hindex].title);
          } else {
            //If Requested header not in CSV file..
            reject(new Error("Header " + request.headers[hindex].title + " not found in targeted CSV file"));
          }
        }
        //Start processing line according to headerRequest Like requestedTitle => Index in CSV
        for (let i = 0; i < rl.length; i++) {
          let Line = rl[i].split(",");
          let row: any = {}
          for (var key in headerKeys) {
            row[key] = Line[headerKeys[key]];
          }
          result.push(row);
        }

        //end of processing..
        //return JSON Object
        const resultJSON = JSON.stringify(result);
        resolve(JSON.parse(resultJSON));
      })
    }
  });
}

export const xlsxFileProcessor = (request: any) => {
  return new Promise((resolve, reject) => {
    if (request.fileExtension === 'XLSX' || request.fileExtension === 'XLS') {
      let headerKeys: any = [];
      let rows: any = [];
      const workbook = new Excel.Workbook();
      //Reading excel file from stream..
      workbook.xlsx.read(request.fileData).then(function (workbookData) {
        //Loading first Sheet Only
        const worksheet = workbookData.getWorksheet('Sheet1');


        worksheet.eachRow({ includeEmpty: false }, function (row: any, rowNumber) {
          //Looking for headers position(Index) in CSV file.. and create an array of headerRequest Like requestedTitle => Index in Excel
          if (rowNumber === 1) {
            //===========Header only be in first row====
            let rowOne = row.values;
            for (let hindex = 0; hindex < request.headers.length; hindex++) {
              if (rowOne.indexOf(request.headers[hindex].title) > -1) {
                headerKeys[request.headers[hindex].label] = rowOne.indexOf(request.headers[hindex].title);
              } else {
                reject(new Error("Header " + request.headers[hindex].title + " not found in targeted excel file"));
              }
            }
          } else {

            //Start processing line according to headerRequest Like requestedTitle => Index in CSV
            let Line: any = {};
            for (var key in headerKeys) {
              Line[key] = row.values[headerKeys[key]];
            }
            rows.push(Line);
            //end processing accroding to requested headers
          }
        });
        //Return response
        const resultJSON = JSON.stringify(rows);
        resolve(JSON.parse(resultJSON));
      });
    }
  });
}

export const xmlFileProcessor = (request: any) => {
  return new Promise((resolve, reject) => {
    if (request.fileExtension === 'xml') {
      request.fileData.on('data', async function (chunk: any) {
        const inputdata = Buffer.from(chunk).toString('utf8');
        let HeaderRequest = [];
        let outputResult: any = [];
        //Looking for headers in XML
        for (let hindex = 0; hindex < request.headers.length; hindex++) {
          HeaderRequest.push(request.headers[hindex].Title);
        }
        var file = request.fileName.split('.');
        var fileName = file[0];

        var options = { compact: true, ignoreComment: true, spaces: 4, ignoreAttrs: false };

        var result: any = convert.xml2js(inputdata, options);
        let LastIndex: any = Object.values(result[fileName])[Object.values(result[fileName]).length - 1];
        //Start processing line according to headerRequest Like requestedTitle => Index in XML
        for (let row = 0; row < LastIndex.length; row++) {
          var wordArray: any = {};
          //Start processing line according to headerRequest Like requestedTitle => Index in XML
          for (let column = 0; column < HeaderRequest.length; column++) {
            var obj = request.headers[column];
            wordArray[obj.label] = LastIndex[row][obj.title]._text;
          }
          outputResult.push(wordArray);
          //End of processing
        }
        //return response
        resolve(outputResult);
      });
    } else {
      reject(new Error("Make sure file extension is XML"));
    }
  });
}