import { AuthRequest } from "./AuthRequest";

/** tns:ConsultarCAEAEntreFechasRequestType */
export interface TnsconsultarCaeaEntreFechasRequestType {
    /** authRequest */
    authRequest?: AuthRequest;
    /** xsd:date */
    fechaDesde?: Date;
    /** xsd:date */
    fechaHasta?: Date;
}
