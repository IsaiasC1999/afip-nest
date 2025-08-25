import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarTiposComprobanteResponseType */
export interface TnsconsultarTiposComprobanteResponseType {
    /** arrayTiposComprobante */
    arrayTiposComprobante?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
