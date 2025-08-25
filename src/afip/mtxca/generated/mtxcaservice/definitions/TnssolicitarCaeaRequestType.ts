import { AuthRequest } from "./AuthRequest";
import { SolicitudCaea } from "./SolicitudCaea";

/** tns:SolicitarCAEARequestType */
export interface TnssolicitarCaeaRequestType {
    /** authRequest */
    authRequest?: AuthRequest;
    /** solicitudCAEA */
    solicitudCAEA?: SolicitudCaea;
}
