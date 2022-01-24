import { BaseImporter } from "../base/baseImporter"
import * as Handler from "../readersFunctions/fileReader"


export async function AAHImporterHandler(data: BaseImporter) {
    try {
        data.Headers = [
            {
                Title: 'LinkCode',
                Label: "PIPCODE"
            },
            {
                Title: 'Description',
                Label: "Description"
            },
            {
                Title: 'PackSize',
                Label: "Pack Size"
            },
            {
                Title: 'PipCode',
                Label: "PipCode"
            },
            {
                Title: 'TradePrice',
                Label: "Price"
            },
            {
                Title: 'Ean',
                Label: "EAN"
            }
        ]
        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from AAHPharmaFunctions ::", err)
    }
}

export async function AHLImpoterHandler(data: BaseImporter) {
    try {
        data.Headers = [
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
        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from AHLImpoterHandler ::", err)
    }
}

export async function CAVImpoterHandler(data: BaseImporter) {
    try {
        data.Headers = [
            {
                Title: 'PIPCODE',
                Label: "PipCode"
            },
            {
                Title: 'PROD CODE',
                Label: "AAH ID"
            },
            {
                Title: 'PRODUCT DESCRIPTION',
                Label: "Description"
            },
            {
                Title: 'PACK SIZE',
                Label: "Pack Size"
            },
        ]
        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from CAVImpoterHandler ::", err)
    }
}

export async function DEPImpoterHandler(data: BaseImporter) {
    try {
        data.Headers = [
            {
                Title: 'Pip Code',
                Label: "PipCode"
            },
            {
                Title: 'Concatenate',
                Label: "Description"
            },
            {
                Title: 'PACK SIZE',
                Label: "Pack Size"
            },
        ]
        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from DEPImpoterHandler ::", err)
    }
}

export async function EPOImpoterHandler(data: BaseImporter) {
    try {

        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from EPOImpoterHandler ::", err)
    }
}

export async function ETHImpoterHandler(data: BaseImporter) {
    try {
        data.Headers = [
            {
                Title: 'PIPCode',
                Label: "PipCode"
            },
            {
                Title: 'Description',
                Label: "Description"
            },
            {
                Title: 'PackSize',
                Label: "Pack Size"
            },
        ]
        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from ETHImpoterHandler ::", err)
    }
}

export async function LEXImpoterHandler(data: BaseImporter) {
    try {
        data.Headers = [
            {
                Title: 'PIPCode',
                Label: "PipCode"
            },
            {
                Title: 'Description',
                Label: "Description"
            },
            {
                Title: 'Size',
                Label: "Pack Size"
            },
            {
                Title: 'Retail Price',
                Label: "Price"
            },
        ]
        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from LEXImpoterHandler ::", err)
    }
}

export async function OTDImpoterHandler(data: BaseImporter) {
    try {
        data.Headers = [
            {
                Title: 'PIP CODE',
                Label: "PipCode"
            },
            {
                Title: 'OTC CODE',
                Label: "AAH ID"
            },
            {
                Title: 'PRODUCT DESCRIPTION',
                Label: "Description"
            },
            {
                Title: 'PACK SIZE',
                Label: "Pack Size"
            },
        ]
        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from OTDImpoterHandler ::", err)
    }
}

export async function SANImpoterHandler(data: BaseImporter) {
    try {

        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from SANImpoterHandler ::", err)
    }
}

export async function PHDImpoterHandler(data: BaseImporter) {
    try {
        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from PHDImpoterHandler ::", err)
    }
}

export async function SIGImpoterHandler(data: BaseImporter) {
    try {
        data.Headers = [
            {
                Title: 'PIP CODE',
                Label: "PipCode"
            },
            {
                Title: 'PROD CODE',
                Label: "AAH ID"
            },
            {
                Title: 'PRODUCT',
                Label: "Description"
            },
            {
                Title: 'PACK SIZE',
                Label: "Pack Size"
            },
            {
                Title: 'SIGMA PRICE',
                Label: "Price"
            },
        ]
        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from SIGImpoterHandler ::", err)
    }
}

export async function CNDImpoterHandler(data: BaseImporter) {
    try {
        data.Headers = [
            {
                Title: 'Pip_code',
                Label: "PipCode"
            },
            {
                Title: 'Company_Name',
                Label: "Wholesaler Code"
            },
            {
                Title: 'Full_Description',
                Label: "Description"
            },
            {
                Title: 'DT_Price',
                Label: "Price"
            },
            {
                Title: 'Trade_price',
                Label: "Price"
            },
            {
                Title: 'AMPP',
                Label: "AMPP"
            },
        ]
        const result = await getfileReader(data);
        return result;
    } catch (err) {
        console.log("Exceptions from CNDImpoterHandler ::", err)
    }
}

// Call File Reader according to file format
export const getfileReader = async (data: any) => {
    switch (data.FileExtension) {
        case 'TXT'://Text File
            const resultText = await Handler.textFileProcessor(data);
            return resultText;

        case 'CSV'://CSV File
            const resultCSV = await Handler.csvFileProcessor(data);
            console.log(resultCSV);
            return resultCSV;
        case 'XLSX' || 'XLS':// Excel File
            const resultXLSX = await Handler.xlsxFileProcessor(data);
            console.log("resultXLSX ---->", resultXLSX)
            return resultXLSX;

        case 'XML':// XML File
            const resultXML = await Handler.xmlFileProcessor(data);
            console.log("resultXML ---->", resultXML)
            return resultXML;
    }
}