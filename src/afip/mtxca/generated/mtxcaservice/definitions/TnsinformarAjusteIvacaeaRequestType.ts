import { AuthRequest } from "./AuthRequest";
import { ComprobanteCaeRequest } from "./ComprobanteCaeRequest";

/** tns:InformarAjusteIVACAEARequestType */
export interface TnsinformarAjusteIvacaeaRequestType {
    /** authRequest */
    authRequest?: AuthRequest;
    /** comprobanteCAEARequest */
    comprobanteCAEARequest?: ComprobanteCaeRequest;
}
