import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarCondicionesIVAResponseType */
export interface TnsconsultarCondicionesIvaResponseType {
    /** arrayCondicionesIVA */
    arrayCondicionesIVA?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
