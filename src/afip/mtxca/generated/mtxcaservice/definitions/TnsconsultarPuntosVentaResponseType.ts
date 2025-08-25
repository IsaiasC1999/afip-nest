import { ArrayPuntosVenta } from "./ArrayPuntosVenta";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarPuntosVentaResponseType */
export interface TnsconsultarPuntosVentaResponseType {
    /** arrayPuntosVenta */
    arrayPuntosVenta?: ArrayPuntosVenta;
    /** evento */
    evento?: CodigoDescripcion;
}
