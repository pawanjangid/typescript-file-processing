import * as fs from "fs";
import * as path from "path";
import * as convert from 'xml-js';
import * as xml2js from "xml2js";

const xmlFilePath = path.resolve(__dirname, 'files/AahProductFile.xml');
const fileContent = fs.readFileSync(xmlFilePath, { encoding: 'utf-8' });
// var options = {
//     compact: true, ignoreComment: true, spaces: 4, mergeCDATA: false,
//     xmlns: false,
//     attrsAsObject: false,
//     explicitArray: false
// };
// const parser = new xml2js.Parser(options);
// var result:any = convert.xml2js(fileContent, options);
// let data:any = result.AahProductFile.Product
// for (var i in data) {
//     console.log("data[i] :::", data[i])
// }
// console.log(result.AahProductFile);


fs.readFile(xmlFilePath, { encoding: 'utf-8' }, function (err, data) {
    parser.parseString(data, function (err: any, result: any) {
        //console.log(result.AahProductFile)
        let data: any = result.AahProductFile.Product
        console.log("data :::", data)

        for (var i in data) {
            console.log("data[i] :::", data[i])
            
        }
    });
});


const wpSampleXML = fs.readFileSync('wp-skeleton.xml');
const xmlParser = new xml2js.Parser({ cdata: true });
    const sampleWPJSON = await xmlParser.parseStringPromise(wpSampleXML);