import { BaseImporter } from "../../../../shared/model/suppliers";
import { MetricKeyWords } from "../../../../shared/model/constants";
import * as readers from "../readers/suppliers.readers"
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import * as s3 from "../../../../shared/aws-services/s3.client"

import Debug from "debug";
const debug = Debug("app:supplierHandler");

export async function aahImporterHandler(req: BaseImporter, res:any) {
    try {

        req.headers = [
            {
                title: 'LinkCode',
                label: "PIPCODE"
            },
            {
                title: 'Description',
                label: "Description"
            },
            {
                title: 'PackSize',
                label: "PackSize"
            },
            {
                title: 'PipCode',
                label: "PipCode"
            },
            {
                title: 'TradePrice',
                label: "Price"
            },
            {
                title: 'Ean',
                label: "EAN"
            }
        ]

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from aahImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function ahlImporterHandler(req: BaseImporter, res:any) {
    try {
        req.headers = [
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
            }
        ]

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from ahlImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function cavImporterHandler(req: BaseImporter, res:any) {
    try {
        req.headers = [
            {
                title: 'PIP CODE',
                label: "PipCode"
            },
            {
                title: 'CAV CODE',
                label: "AAHID"
            },
            {
                title: 'PRODUCT DESCRIPTION',
                label: "Description"
            },
            {
                title: 'PACK SIZE',
                label: "PackSize"
            }
        ]

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from cavImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function depImporterHandler(req: BaseImporter, res:any) {
    try {
        req.headers = [
            {
                title: 'Pip Code',
                label: "PipCode"
            },
            {
                title: 'Concatenate',
                label: "Description"
            },
            {
                title: 'PACK SIZE',
                label: "PackSize"
            }
        ]

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from depImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function epoImporterHandler(req: BaseImporter, res:any) {
    try {

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from epoImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function ethImporterHandler(req: BaseImporter, res:any) {
    try {
        req.headers = [
            {
                title: 'PIPCode',
                label: "PipCode"
            },
            {
                title: 'Description',
                label: "Description"
            },
            {
                title: 'PackSize',
                label: "PackSize"
            }
        ]

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from ethImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function lexImporterHandler(req: BaseImporter, res:any) {
    try {
        req.headers = [
            {
                title: 'PIPCode',
                label: "PipCode"
            },
            {
                title: 'Description',
                label: "Description"
            },
            {
                title: 'Size',
                label: "PackSize"
            },
            {
                title: 'Retail Price',
                label: "Price"
            }
        ]

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from lexImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function otdImporterHandler(req: BaseImporter, res:any) {
    try {
        req.headers = [
            {
                title: 'PIP CODE',
                label: "PipCode"
            },
            {
                title: 'OTC CODE',
                label: "AAHID"
            },
            {
                title: 'PRODUCT DESCRIPTION',
                label: "Description"
            },
            {
                title: 'PACKSIZE',
                label: "PackSize"
            }
        ]

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
       debug(`${MetricKeyWords.AlertAppError} Error retriving from otdImporterHandler: ${e}.`);
       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function sanImporterHandler(req: BaseImporter, res:any) {
    try {

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from sanImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function phdImporterHandler(req: BaseImporter, res:any) {
    try {

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from phdImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function sigImporterHandler(req: BaseImporter, res:any) {
    try {
        req.headers = [
            {
                title: 'PIP CODE',
                label: "PipCode"
            },
            {
                title: 'PROD CODE',
                label: "AAHID"
            },
            {
                title: 'PRODUCT',
                label: "Description"
            },
            {
                title: 'PACK SIZE',
                label: "PackSize"
            },
            {
                title: 'SIGMA PRICE',
                label: "Price"
            }
        ]

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from sigImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

export async function cndImporterHandler(req: BaseImporter, res:any) {
    try {
        req.headers = [
            {
                title: 'Pip_code',
                label: "PipCode"
            },
            {
                title: 'Company_Name',
                label: "Wholesaler Code"
            },
            {
                title: 'Full_Description',
                label: "Description"
            },
            {
                title: 'DT_Price',
                label: "Price"
            },
            {
                title: 'Trade_price',
                label: "Price"
            },
            {
                title: 'AMPP',
                label: "AMPP"
            }
        ]

        req.fileName = "this is file name";
        req.fileExtension = "XLSX";

        //call the file reader function to read file according to extension
        return await getFileReader(req, res);
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving from cndImporterHandler: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}

// Call File Reader according to file format
export const getFileReader = async (req: any, res: any) => {
    try{
        const s3Client = await s3.getClient();
        let fileData:any = s3.readStream(s3Client, req.fileName);
        req.fileData = fileData;

        switch (req.fileExtension) {

            case 'TXT':// Text File
                const resultText = await readers.textFileProcessor(req);
                return resultText;
    
            case 'CSV':// CSV File
                const resultCSV = await readers.csvFileProcessor(req);
                return resultCSV;
    
            case 'XLSX':// Excel File
                const resultXLSX = await readers.xlsxFileProcessor(req);
                return resultXLSX;
    
            case 'XLS':// Excel File
                const resultXLS = await readers.xlsxFileProcessor(req);
                return resultXLS;
    
            case 'XML':// XML File
                const resultXML = await readers.xmlFileProcessor(req);
                return resultXML;
            
            default:
                debug(`${MetricKeyWords.AlertAppError} Unknown reader supplied: ${req.fileExtension}. Event: ${JSON.stringify(req)}.`);
                break;
        }
    }catch(e){
        debug(`${MetricKeyWords.AlertAppError} Error retriving get file reader ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
    
    
}