import { Request, Response, Router, NextFunction } from "express";
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import _ from "lodash";
import Debug from "debug";

import { MetricKeyWords } from "../../../../shared/model/constants";
import { ShortCode } from "../../../../shared/model/suppliers";
import * as handler from "../handlers/suppliers.handler"

const suppliersController = Router();
const debug = Debug("app:suppliersController");

// routes
suppliersController.post("/", suppliers);

export default suppliersController;

async function suppliers(req: Request | any, res: Response, next: NextFunction) {
    try {
        switch (req.supplierCode) {

            case ShortCode.Aah: //AAH Pharmaceuticals
                console.log('*** AAH Pharmaceuticals ***');
                const aahResult = await handler.aahImporterHandler(req, res);
                console.log("aahResult ---->",aahResult)
                break;
    
            case ShortCode.Ahl: //Alliance Healthcare
                console.log('*** Alliance Healthcare ***');
                const ahlResult = await handler.ahlImporterHandler(req, res)
                console.log("ahlResult ---->",ahlResult)
                break;
    
            case ShortCode.Cav: //Cavendish
                console.log('*** Cavendish ***');
                const cavResult = await handler.cavImporterHandler(req, res)
                console.log("cavResult ---->",cavResult)
                break;
    
            case ShortCode.Dep: //DE Pharma
                console.log('*** DE Pharma ***');
                const depResult = await handler.depImporterHandler(req, res)
                console.log("depResult ---->",depResult)
                break;
    
            case ShortCode.Epo: //Trident/Enterprise
                console.log('*** Trident/Enterprise ***');
                const epoResult = await handler.epoImporterHandler(req, res)
                console.log("epoResult ---->",epoResult)
                break;
    
            case ShortCode.Eth: //Ethigen
                console.log('*** Ethigen ***');
                const ethResult = await handler.ethImporterHandler(req, res)
                console.log("ethResult ---->",ethResult)
                break;
    
            case ShortCode.Lex: //Lexon
                console.log('*** Lexon ***');
                const lexResult = await handler.lexImporterHandler(req, res)
                console.log("lexResult ---->",lexResult)
                break;
    
            case ShortCode.Otd: //OTC Direct
                console.log('*** OTC Direct ***');
                const otdResult = await handler.otdImporterHandler(req, res)
                console.log("otdResult ---->",otdResult)
                break;
    
            case ShortCode.San: //Paydens Sangers
                console.log('*** Paydens Sangers ***');
                const sanResult = await handler.sanImporterHandler(req, res)
                console.log("sanResult ---->",sanResult)
                break;
    
            case ShortCode.Phd: //Phoenix Healthcare Distribution
                console.log('*** Phoenix Healthcare Distribution ***');
                const phdResult = await handler.phdImporterHandler(req, res)
                console.log("phdResult ---->",phdResult)
                break;
    
            case ShortCode.Sig: //Sigma
                console.log('*** Sigma ***');
                const sigResult = await handler.sigImporterHandler(req, res)
                console.log("sigResult ---->",sigResult)
                break;
    
            case ShortCode.Cnd: //C+D
                console.log('*** C+D ***');
                const cndResult = await handler.cndImporterHandler(req, res)
                console.log("cndResult ---->",cndResult)
                break;

            default:
                debug(`${MetricKeyWords.AlertAppError} Unknown supplier code supplied: ${req.supplierCode}. Event: ${JSON.stringify(req)}.`);
                break;
        }
    } catch (e) {
        debug(`${MetricKeyWords.AlertAppError} Error retriving supplier req: ${e}.`);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}