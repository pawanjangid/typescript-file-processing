import {BaseImporter} from "../base/baseImporter"
import* as Handler from "../readersFunctions/fileReader"


export async function AAHImporterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from AAHPharmaFunctions ::",err)
    }
}

export async function AHLImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from AHLImpoterHandler ::",err)
    }
}

export async function CAVImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from CAVImpoterHandler ::",err)
    }
}

export async function DEPImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from DEPImpoterHandler ::",err)
    }
}

export async function EPOImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from EPOImpoterHandler ::",err)
    }
}

export async function ETHImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from ETHImpoterHandler ::",err)
    }
}

export async function LEXImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from LEXImpoterHandler ::",err)
    }
}

export async function OTDImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from OTDImpoterHandler ::",err)
    }
}

export async function SANImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from SANImpoterHandler ::",err)
    }
}

export async function PHDImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from PHDImpoterHandler ::",err)
    }
}

export async function SIGImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from SIGImpoterHandler ::",err)
    }
}

export async function CNDImpoterHandler(data: BaseImporter) {
    try{
        const result = await getfileReader(data);
        return result;
    }catch(err){
        console.log("Exceptions from CNDImpoterHandler ::",err)
    }
}

// Call File Reader according to file format
export const getfileReader =async (data:any) => {
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
            console.log("resultXLSX ---->",resultXLSX)
            return resultXLSX;

        case 'XML':// XML File
            const resultXML = await Handler.xmlFileProcessor(data);
            console.log("resultXML ---->",resultXML)
            return resultXML;
    }
}