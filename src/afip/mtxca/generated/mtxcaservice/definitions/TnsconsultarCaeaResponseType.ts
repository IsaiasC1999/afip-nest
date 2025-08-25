import { CaeaResponse } from "./CaeaResponse";
import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarCAEAResponseType */
export interface TnsconsultarCaeaResponseType {
    /** CAEAResponse */
    CAEAResponse?: CaeaResponse;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
