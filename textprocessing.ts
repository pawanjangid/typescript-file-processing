import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';


    async function processLineByLine(path:any) {
        const fileStream = fs.createReadStream(path);
      
        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity
        });
      
        let data  = [];
        for await (const line of rl) {
        var wordArray:any = {};
        var words = line.split(" ");
        let newWords = words.filter((a) => a);
        //console.log(newWords);
        for (let i = 0; i < newWords.length; i++) {
            let key = 'Title_'+i;
            wordArray[key] = newWords[i]; 
        }
        
        data.push(wordArray);
            
        }
            var object = JSON.stringify(data);
            console.log(object);
      }
    

const textFilePath = path.resolve(__dirname, 'files/COUNTR2.TXT');
processLineByLine(textFilePath);