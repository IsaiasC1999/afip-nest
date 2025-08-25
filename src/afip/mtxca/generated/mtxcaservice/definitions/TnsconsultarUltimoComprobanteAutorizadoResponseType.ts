import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarUltimoComprobanteAutorizadoResponseType */
export interface TnsconsultarUltimoComprobanteAutorizadoResponseType {
    /** NumeroComprobanteSimpleType|xsd:long|minInclusive,maxInclusive */
    numeroComprobante?: string;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
