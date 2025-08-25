import { CaeaResponse } from "./CaeaResponse";

/**
 * arrayCAEAResponse
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ArrayCaeaResponse {
    /** CAEAResponse[] */
    CAEAResponse?: Array<CaeaResponse>;
}
