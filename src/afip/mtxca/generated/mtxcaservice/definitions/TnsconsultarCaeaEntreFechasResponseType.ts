import { ArrayCaeaResponse } from "./ArrayCaeaResponse";
import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarCAEAEntreFechasResponseType */
export interface TnsconsultarCaeaEntreFechasResponseType {
    /** arrayCAEAResponse */
    arrayCAEAResponse?: ArrayCaeaResponse;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
