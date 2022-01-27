import { BaseImporter } from "../base/baseImporter"
import * as readerFunction from "../readersFunctions/fileReader"


export async function aahImporterHandler(data: BaseImporter) {
    try {
        data.headers = [
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
                title: 'TradePrice',
                label: "Price"
            },
            {
                title: 'Ean',
                label: "EAN"
            }
        ]
        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from aahImporterHandler ::", err)
    }
}

export async function ahlImpoterHandler(data: BaseImporter) {
    try {
        data.headers = [
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
        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from ahlImpoterHandler ::", err)
    }
}

export async function cavImpoterHandler(data: BaseImporter) {
    try {
        data.headers = [
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
        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from cavImpoterHandler ::", err)
    }
}

export async function depImpoterHandler(data: BaseImporter) {
    try {
        data.headers = [
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
            },
        ]
        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from depImpoterHandler ::", err)
    }
}

export async function epoImpoterHandler(data: BaseImporter) {
    try {

        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from epoImpoterHandler ::", err)
    }
}

export async function ethImpoterHandler(data: BaseImporter) {
    try {
        data.headers = [
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
            },
        ]
        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from ethImpoterHandler ::", err)
    }
}

export async function lexImpoterHandler(data: BaseImporter) {
    try {
        data.headers = [
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
            },
        ]
        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from lexImpoterHandler ::", err)
    }
}

export async function otdImpoterHandler(data: BaseImporter) {
    try {
        data.headers = [
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
            },
        ]
        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from otdImpoterHandler ::", err)
    }
}

export async function sanImpoterHandler(data: BaseImporter) {
    try {

        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from sanImpoterHandler ::", err)
    }
}

export async function phdImpoterHandler(data: BaseImporter) {
    try {
        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from phdImpoterHandler ::", err)
    }
}

export async function sigImpoterHandler(data: BaseImporter) {
    try {
        data.headers = [
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
            },
        ]
        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from sigImpoterHandler ::", err)
    }
}

export async function cndImpoterHandler(data: BaseImporter) {
    try {
        data.headers = [
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
            },
        ]
        const result = await getFileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from cndImpoterHandler ::", err)
    }
}

// Call File Reader according to file format
export const getFileReader = async (data: any) => {
    switch (data.fileExtension) {
        case 'TXT':// Text File
            const resultText = await readerFunction.textFileProcessor(data);
            return resultText;

        case 'CSV':// CSV File
            const resultCSV = await readerFunction.csvFileProcessor(data);
            return resultCSV;

        case 'XLSX' || 'XLS':// Excel File
            const resultXLSX = await readerFunction.xlsxFileProcessor(data);
            return resultXLSX;

        case 'XML':// XML File
            const resultXML = await readerFunction.xmlFileProcessor(data);
            return resultXML;
    }
}