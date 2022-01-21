import {textFileProcessor,csvFileProcessor,xlsxFileProcessor} from "./src/fileprocessor"
import * as Handler from "./src/importerHandler/handler"
import * as path from 'path';

async function executeTask(data: any) {
    switch (data.SupplierCode) {

        case 'AAH'://AAH Pharmaceuticals
            await Handler.AAHImporterHandler(data)
            break;

        case 'AHL'://Alliance Healthcare
            console.log('Alliance Healthcare');
            await Handler.AHLImpoterHandler(data)
            break;

        case 'CAV'://Cavendish
            console.log('CAV');
            await Handler.CAVImpoterHandler(data)
            break;

        case 'DEP'://DE Pharma
            console.log('DEP');
            await Handler.DEPImpoterHandler(data)
            break;

        case 'EPO'://Trident/Enterprise
            console.log('EPO');
            await Handler.EPOImpoterHandler(data)
            break;

        case 'ETH'://Ethigen
            console.log('ETH');
            await Handler.ETHImpoterHandler(data)
            break;

        case 'LEX'://Lexon
            console.log('LEX');
            await Handler.LEXImpoterHandler(data)
            break;

        case 'OTD'://OTC Direct
            console.log('OTD');
            await Handler.OTDImpoterHandler(data)
            break;

        case 'SAN'://Paydens Sangers
            console.log('SAN');
            await Handler.SANImpoterHandler(data)
            break;

        case 'PHD'://Phoenix Healthcare Distribution
            console.log('PHD');
            await Handler.PHDImpoterHandler(data)
            break;

        case 'SIG'://Sigma
            console.log('SIG');
            await Handler.SIGImpoterHandler(data)
            break;

        case 'CND'://C+D
            console.log('CND');
            await Handler.CNDImpoterHandler(data)
            break;

    }
}

let wholesellerData = {
    FilePath: path.resolve(__dirname, 'files/MEDICL.TXT'),
    SupplierCode: "AAH",
    FileExtension: "TXT",
    SkipRows: 0,
    TotalColumn: 10
}
executeTask(wholesellerData);



// let request = {
//     FilePath:'',
//     FileType:'csv',
//     Headers:[
//         {
//             Title:'In-Csv',
//             Label:"Reqeust"
//         },
//         {
//             Title:'In-Csv',
//             Label:"Request"
//         }
//     ]
// }



// const textFilePath = path.resolve(__dirname, 'files/MEDICL.TXT');
// console.log(textFileProcessor(textFilePath));


// const csvFilePath = path.resolve(__dirname, 'files/Cavendish.csv');
// console.log("Output : ",csvFileProcessor(csvFilePath));

// const xlsxFilePath = path.resolve(__dirname, 'files/process.xlsx');
// console.log("Output : ",xlsxFileProcessor(xlsxFilePath));