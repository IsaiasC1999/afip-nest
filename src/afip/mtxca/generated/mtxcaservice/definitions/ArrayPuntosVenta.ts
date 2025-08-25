import { PuntoVenta } from "./PuntoVenta";

/**
 * arrayPuntosVenta
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ArrayPuntosVenta {
    /** puntoVenta[] */
    puntoVenta?: Array<PuntoVenta>;
}
