
/**
 * authRequest
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface AuthRequest {
    /** xsd:string */
    token?: string;
    /** xsd:string */
    sign?: string;
    /** xsd:long */
    cuitRepresentada?: number;
}
