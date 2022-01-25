import * as AWS from 'aws-sdk';
import { resolve } from 'path';
import * as Handler from "./src/importerHandler/handler"


//S3 credentials
var s3 = new AWS.S3({
    accessKeyId: "AKIAQEOAJVKBNEJKKJMR",
    secretAccessKey: "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",
    region: 'us-east-1'
});

var options = {
    Bucket: 'fileprocessbucket',
    // Key: "COUNTR2.TXT",
   // Key:"AahProductFile.xml",
    // Key:"Cavendish.csv"
    Key:"AahProductFile (4).xlsx"
};

async function executeTask(data: any) {
    let fileData = await downloadFromS3(options);
    data.FileData = fileData;
    data.FileName = options.Key
    switch (data.SupplierCode) {

        case 'AAH'://AAH Pharmaceuticals
            console.log('*** AAH Pharmaceuticals ***');
            const AAHresult = await Handler.AAHImporterHandler(data);
            return AAHresult;

        case 'AHL'://Alliance Healthcare
            console.log('*** Alliance Healthcare ***');
            const AHLresult = await Handler.AHLImpoterHandler(data)
            return AHLresult;

        case 'CAV'://Cavendish
            console.log('*** Cavendish ***');
            const CAVresult = await Handler.CAVImpoterHandler(data)
            return CAVresult;

        case 'DEP'://DE Pharma
            console.log('*** DE Pharma ***');
            const DEPresult = await Handler.DEPImpoterHandler(data)
            return DEPresult;

        case 'EPO'://Trident/Enterprise
            console.log('*** Trident/Enterprise ***');
            const EPOresult = await Handler.EPOImpoterHandler(data)
            return EPOresult;

        case 'ETH'://Ethigen
            console.log('*** Ethigen ***');
            const ETHresult = await Handler.ETHImpoterHandler(data)
            return ETHresult;

        case 'LEX'://Lexon
            console.log('*** Lexon ***');
            const LEXresult = await Handler.LEXImpoterHandler(data)
            return LEXresult;

        case 'OTD'://OTC Direct
            console.log('*** OTC Direct ***');
            const OTDresult = await Handler.OTDImpoterHandler(data)
            return OTDresult;

        case 'SAN'://Paydens Sangers
            console.log('*** Paydens Sangers ***');
            const SANresult = await Handler.SANImpoterHandler(data)
            return SANresult;

        case 'PHD'://Phoenix Healthcare Distribution
            console.log('*** Phoenix Healthcare Distribution ***');
            const PHDresult = await Handler.PHDImpoterHandler(data)
            return PHDresult;

        case 'SIG'://Sigma
            console.log('*** Sigma ***');
            const SIGresult = await Handler.SIGImpoterHandler(data)
            return SIGresult;

        case 'CND'://C+D
            console.log('*** C+D ***');
            const CNDresult = await Handler.CNDImpoterHandler(data)
            return CNDresult;
    }
}

let wholesellerData = {
    SupplierCode: "AAH",
    FileExtension: "XLSX"
}

//Read file from S3 Bucket
async function downloadFromS3(data: any) {
    return s3.getObject(data).createReadStream();
}

executeTask(wholesellerData);