import * as fs from "fs";

import * as path from "path";

import * as convert from 'xml-js';



const xmlFilePath = path.resolve(__dirname, 'files/AahProductFile.xsd');

const fileContent = fs.readFileSync(xmlFilePath, { encoding: 'utf-8' });

var options = {compact: true, ignoreComment: true, spaces: 4};

var result = convert.xml2js(fileContent, options);

console.log(result);