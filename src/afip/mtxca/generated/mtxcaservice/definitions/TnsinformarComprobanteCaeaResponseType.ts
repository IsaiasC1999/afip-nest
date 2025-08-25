import { ComprobanteCaeaResponse } from "./ComprobanteCaeaResponse";
import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:InformarComprobanteCAEAResponseType */
export interface TnsinformarComprobanteCaeaResponseType {
    /** ResultadoSimpleType|xsd:string|A,O,R */
    resultado?: string;
    /** xsd:date */
    fechaProceso?: Date;
    /** comprobanteCAEAResponse */
    comprobanteCAEAResponse?: ComprobanteCaeaResponse;
    /** arrayObservaciones */
    arrayObservaciones?: ArrayObservaciones;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
