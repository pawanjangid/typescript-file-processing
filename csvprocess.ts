import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';

type WorldCity = {
  name: string;
  country: string;
  subCountry: string;
  geoNameId: number;
};

(() => {

    //csv file location
  const csvFilePath = path.resolve(__dirname, 'files/world-cities_csv.csv');

  //headers of csv file
  const headers = ['name', 'country', 'subCountry', 'geoNameId'];

  //readt file form your lpath
  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

  //now parse file into json..
  parse(fileContent, {
    delimiter: ',',
    fromLine:2,
    cast:(colmnValue,context) =>{
        if(context.column === 'geoNameId'){
            return parseInt(colmnValue,10);
        }
        return colmnValue;
    },
    on_record: (line, context) => {
        if (line.country !== 'India') {
          return;
        }
  
        return line;
      },
    columns: headers,
  }, (error, result: WorldCity[]) => {
    if (error) {
      console.error(error);
    }

    const resultJSON = JSON.stringify(result);

    console.log(resultJSON);
  });
})();