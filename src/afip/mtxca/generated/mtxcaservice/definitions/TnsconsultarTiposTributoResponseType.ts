import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarTiposTributoResponseType */
export interface TnsconsultarTiposTributoResponseType {
    /** arrayTiposTributo */
    arrayTiposTributo?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
