import { AuthRequest } from "./AuthRequest";
import { ComprobanteCaeRequest } from "./ComprobanteCaeRequest";

/** tns:AutorizarAjusteIVARequestType */
export interface TnsautorizarAjusteIvaRequestType {
    /** authRequest */
    authRequest?: AuthRequest;
    /** comprobanteCAERequest */
    comprobanteCAERequest?: ComprobanteCaeRequest;
}
