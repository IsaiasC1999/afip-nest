import { AuthRequest } from "./AuthRequest";

/** tns:ConsultarCotizacionMonedaRequestType */
export interface TnsconsultarCotizacionMonedaRequestType {
    /** authRequest */
    authRequest?: AuthRequest;
    /** xsd:string */
    codigoMoneda?: string;
    /** xsd:date */
    fechaCotizacion?: Date;
}
