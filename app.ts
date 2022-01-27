import * as AWS from 'aws-sdk';
import * as handler from "./src/importerHandler/handler"

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
    //Key:"Cavendish2.csv"
    //Key:"AahProductFile (4).xlsx"
};

async function executeTask(data: any) {
    let fileData = await downloadFromS3(options);
    data.fileData = fileData;
    data.fileName = options.Key;
    switch (data.SupplierCode) {
        case 'AAH'://AAH Pharmaceuticals
            console.log('*** AAH Pharmaceuticals ***');
            const aahResult = await handler.aahImporterHandler(data);
            console.log("aahResult ---->",aahResult)
            break;

        case 'AHL'://Alliance Healthcare
            console.log('*** Alliance Healthcare ***');
            const ahlResult = await handler.ahlImpoterHandler(data)
            console.log("ahlResult ---->",ahlResult)
            break;

        case 'CAV'://Cavendish
            console.log('*** Cavendish ***');
            const cavResult = await handler.cavImpoterHandler(data)
            console.log("cavResult ---->",cavResult)
            break;

        case 'DEP'://DE Pharma
            console.log('*** DE Pharma ***');
            const depResult = await handler.depImpoterHandler(data)
            console.log("depResult ---->",depResult)
            break;

        case 'EPO'://Trident/Enterprise
            console.log('*** Trident/Enterprise ***');
            const epoResult = await handler.epoImpoterHandler(data)
            console.log("epoResult ---->",epoResult)
            break;

        case 'ETH'://Ethigen
            console.log('*** Ethigen ***');
            const ethResult = await handler.ethImpoterHandler(data)
            console.log("ethResult ---->",ethResult)
            break;

        case 'LEX'://Lexon
            console.log('*** Lexon ***');
            const lexResult = await handler.lexImpoterHandler(data)
            console.log("lexResult ---->",lexResult)
            break;

        case 'OTD'://OTC Direct
            console.log('*** OTC Direct ***');
            const otdResult = await handler.otdImpoterHandler(data)
            console.log("otdResult ---->",otdResult)
            break;

        case 'SAN'://Paydens Sangers
            console.log('*** Paydens Sangers ***');
            const sanResult = await handler.sanImpoterHandler(data)
            console.log("sanResult ---->",sanResult)
            break;

        case 'PHD'://Phoenix Healthcare Distribution
            console.log('*** Phoenix Healthcare Distribution ***');
            const phdResult = await handler.phdImpoterHandler(data)
            console.log("phdResult ---->",phdResult)
            break;

        case 'SIG'://Sigma
            console.log('*** Sigma ***');
            const sigResult = await handler.sigImpoterHandler(data)
            console.log("sigResult ---->",sigResult)
            break

        case 'CND'://C+D
            console.log('*** C+D ***');
            const cndResult = await handler.cndImpoterHandler(data)
            console.log("cndResult ---->",cndResult)
            break
    }

    
}

//Read file from S3 Bucket
async function downloadFromS3(data: any) {
    return s3.getObject(data).createReadStream();
}

let wholesellerData = {
    SupplierCode: "AHL",
    fileExtension: "TXT"
}


executeTask(wholesellerData);