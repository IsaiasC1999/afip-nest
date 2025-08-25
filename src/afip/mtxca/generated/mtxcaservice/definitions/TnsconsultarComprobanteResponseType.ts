import { ComprobanteCaeRequest } from "./ComprobanteCaeRequest";
import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarComprobanteResponseType */
export interface TnsconsultarComprobanteResponseType {
    /** comprobante */
    comprobante?: ComprobanteCaeRequest;
    /** arrayObservaciones */
    arrayObservaciones?: ArrayObservaciones;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
