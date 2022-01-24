import * as AWS from 'aws-sdk';
import * as Handler from "./src/importerHandler/handler"

//S3 credentials
var s3 = new AWS.S3({
    accessKeyId: "AKIAQEOAJVKBNEJKKJMR",
    secretAccessKey: "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",
    region: 'us-east-1'
});

var options = {
    Bucket: 'fileprocessbucket',
    Key: "COUNTR2.TXT",
    //Key:"AahProductFile.xml",
    //Key:"Cavendish.csv"
};

async function executeTask(data: any) {
    let fileData= await downloadFromS3(options);
    data.FileData = fileData.Body.toString('utf-8');
    data.FileName = options.Key
    switch (data.SupplierCode) {

        case 'AAH'://AAH Pharmaceuticals
            //console.log('*** AAH Pharmaceuticals ***');
            await Handler.AAHImporterHandler(data);
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
    //FilePath: path.resolve(__dirname, 'files/Cavendish.csv'),
    SupplierCode: "AAH",
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


// let csvHeader = {
//     SupplierCode: "AAH",
//     FileExtension: "CSV",
//     Headers:[
//         {
//             Title:'PIP CODE',
//             Label:"PIPCODE"
//         },
//         {
//             Title:'CAV CODE',
//             Label:"CAVCODE"
//         },
//         {
//             Title:'PRODUCT DESCRIPTION',
//             Label:"DESCRIPTION"
//         },
//         {
//             Title:'PACK SIZE',
//             Label:"PACKSIZE"
//         },
//         {
//             Title:'CATEGORY',
//             Label:"CATEGORY"
//         }
//     ]
// }

// let request = {
//     SupplierCode: "AHL",
//     FileExtension:'XLSX',
//     Headers:[

//         {

//             Title:'Description',
//             Label:"Description"

//         },

//         {

//             Title:'PackSize',
//             Label:"PackSize"

//         },

//         {

//             Title:'PipCode',
//             Label:"PipCode"

//         },

//         {

//             Title:'Ean',
//             Label:"Ean"

//         }

//     ]

// }


//Read file from S3 Bucket
async function downloadFromS3 (data:any) {
    const fileStream:any = await s3.getObject(data).promise();
    return fileStream;
}

executeTask(wholesellerData);





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