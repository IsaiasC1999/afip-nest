import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarTiposDocumentoResponseType */
export interface TnsconsultarTiposDocumentoResponseType {
    /** arrayTiposDocumento */
    arrayTiposDocumento?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
