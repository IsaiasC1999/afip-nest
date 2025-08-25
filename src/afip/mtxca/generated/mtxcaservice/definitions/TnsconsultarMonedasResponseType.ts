import { ArrayMonedas } from "./ArrayMonedas";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarMonedasResponseType */
export interface TnsconsultarMonedasResponseType {
    /** arrayMonedas */
    arrayMonedas?: ArrayMonedas;
    /** evento */
    evento?: CodigoDescripcion;
}
