import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarCotizacionMonedaResponseType */
export interface TnsconsultarCotizacionMonedaResponseType {
    /** xsd:decimal */
    cotizacionMoneda?: number;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
