import * as Handler from "./src/importerHandler/handler"
import * as path from 'path';

async function executeTask(data: any) {
    switch (data.SupplierCode) {

        case 'AAH'://AAH Pharmaceuticals
            console.log('*** AAH Pharmaceuticals ***');
            await Handler.AAHImporterHandler(data)
            break;

        case 'AHL'://Alliance Healthcare
            console.log('*** Alliance Healthcare ***');
            await Handler.AHLImpoterHandler(data)
            break;

        case 'CAV'://Cavendish
            console.log('*** Cavendish ***');
            await Handler.CAVImpoterHandler(data)
            break;

        case 'DEP'://DE Pharma
            console.log('*** DE Pharma ***');
            await Handler.DEPImpoterHandler(data)
            break;

        case 'EPO'://Trident/Enterprise
            console.log('*** Trident/Enterprise ***');
            await Handler.EPOImpoterHandler(data)
            break;

        case 'ETH'://Ethigen
            console.log('*** Ethigen ***');
            await Handler.ETHImpoterHandler(data)
            break;

        case 'LEX'://Lexon
            console.log('*** Lexon ***');
            await Handler.LEXImpoterHandler(data)
            break;

        case 'OTD'://OTC Direct
            console.log('*** OTC Direct ***');
            await Handler.OTDImpoterHandler(data)
            break;

        case 'SAN'://Paydens Sangers
            console.log('*** Paydens Sangers ***');
            await Handler.SANImpoterHandler(data)
            break;

        case 'PHD'://Phoenix Healthcare Distribution
            console.log('*** Phoenix Healthcare Distribution ***');
            await Handler.PHDImpoterHandler(data)
            break;

        case 'SIG'://Sigma
            console.log('*** Sigma ***');
            await Handler.SIGImpoterHandler(data)
            break;

        case 'CND'://C+D
            console.log('*** C+D ***');
            await Handler.CNDImpoterHandler(data)
            break;
    }
}

let wholesellerData = {
    FilePath: path.resolve(__dirname, 'files/MEDICL.TXT'),
    SupplierCode: "AHL",
    FileExtension: "TXT",
    Headers: [
        {
            title: "Description",
            start: 7,
            length: 34
        },
        {
            title: "PackSize",
            start: 41,
            length: 3
        },
        {
            title: "Price",
            start: 45,
            length: 6
        },
        {
            title: "PipCode",
            start: 78,
            length: 7
        },
        {
            title: "EAN",
            start: 85,
            length: 13
        },
    ]
}
executeTask(wholesellerData);



// let csvHeader = {
//     FilePath:'',
//     FileType:'csv',
//     Headers:[
//         {
//             Title:'LinkCode',
//             Label:"Order Code"
//         },
//         {
//             Title:'Description',
//             Label:"Description"
//         },
//         {
//             Title:'PackSize',
//             Label:"Pack Size"
//         },
//         {
//             Title:'PipCode',
//             Label:"Pip Code"
//         },
//         {
//             Title:'TradePrice',
//             Label:"Price"
//         },
//         {
//             Title:'Ean',
//             Label:"EAN"
//         },
//         {
//             Title:'MinIssueQuantity',
//             Label:"Outer Pack"
//         }
//     ]
// }

// let txtHeader = [
//     {
//         title: "Description",
//         start: 7,
//         length: 34
//     },
//     {
//         title: "PackSize",
//         start: 41,
//         length: 3
//     },
//     {
//         title: "Price",
//         start: 45,
//         length: 6
//     },
//     {
//         title: "PipCode",
//         start: 78,
//         length: 7
//     },
//     {
//         title: "EAN",
//         start: 85,
//         length: 13
//     },

// ]



// const textFilePath = path.resolve(__dirname, 'files/MEDICL.TXT');
// console.log(textFileProcessor(textFilePath));


// const csvFilePath = path.resolve(__dirname, 'files/Cavendish.csv');
// console.log("Output : ",csvFileProcessor(csvFilePath));

// const xlsxFilePath = path.resolve(__dirname, 'files/process.xlsx');
// console.log("Output : ",xlsxFileProcessor(xlsxFilePath));