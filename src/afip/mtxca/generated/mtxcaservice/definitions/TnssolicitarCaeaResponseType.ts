import { CaeaResponse } from "./CaeaResponse";
import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:SolicitarCAEAResponseType */
export interface TnssolicitarCaeaResponseType {
    /** CAEAResponse */
    CAEAResponse?: CaeaResponse;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
