import { AuthRequest } from "./AuthRequest";
import { ComprobanteCaeRequest } from "./ComprobanteCaeRequest";

/** tns:AutorizarComprobanteRequestType */
export interface TnsautorizarComprobanteRequestType {
    /** authRequest */
    authRequest?: AuthRequest;
    /** comprobanteCAERequest */
    comprobanteCAERequest?: ComprobanteCaeRequest;
}
