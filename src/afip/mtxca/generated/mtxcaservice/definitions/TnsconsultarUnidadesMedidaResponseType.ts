import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarUnidadesMedidaResponseType */
export interface TnsconsultarUnidadesMedidaResponseType {
    /** arrayUnidadesMedida */
    arrayUnidadesMedida?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
