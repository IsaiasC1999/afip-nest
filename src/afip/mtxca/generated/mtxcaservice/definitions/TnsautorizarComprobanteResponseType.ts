import { ComprobanteResponse } from "./ComprobanteResponse";
import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:AutorizarComprobanteResponseType */
export interface TnsautorizarComprobanteResponseType {
    /** ResultadoSimpleType|xsd:string|A,O,R */
    resultado?: string;
    /** comprobanteResponse */
    comprobanteResponse?: ComprobanteResponse;
    /** arrayObservaciones */
    arrayObservaciones?: ArrayObservaciones;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
