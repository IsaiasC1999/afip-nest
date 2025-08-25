import { ArrayPuntosVenta } from "./ArrayPuntosVenta";
import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarPtosVtaCAEANoInformadosResponseType */
export interface TnsconsultarPtosVtaCaeaNoInformadosResponseType {
    /** arrayPuntosVenta */
    arrayPuntosVenta?: ArrayPuntosVenta;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
