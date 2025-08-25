import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarAlicuotasIVAResponseType */
export interface TnsconsultarAlicuotasIvaResponseType {
    /** arrayAlicuotasIVA */
    arrayAlicuotasIVA?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
