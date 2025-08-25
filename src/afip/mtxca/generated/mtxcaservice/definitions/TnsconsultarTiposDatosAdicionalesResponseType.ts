import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarTiposDatosAdicionalesResponseType */
export interface TnsconsultarTiposDatosAdicionalesResponseType {
    /** arrayTiposDatosAdicionales */
    arrayTiposDatosAdicionales?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
