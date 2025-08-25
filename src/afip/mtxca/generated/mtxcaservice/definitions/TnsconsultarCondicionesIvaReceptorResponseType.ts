import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarCondicionesIVAReceptorResponseType */
export interface TnsconsultarCondicionesIvaReceptorResponseType {
    /** arrayCondicionesIVAReceptor */
    arrayCondicionesIVAReceptor?: ArrayObservaciones;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
