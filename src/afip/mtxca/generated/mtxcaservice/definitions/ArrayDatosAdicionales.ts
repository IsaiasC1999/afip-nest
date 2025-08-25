import { DatoAdicional } from "./DatoAdicional";

/**
 * arrayDatosAdicionales
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ArrayDatosAdicionales {
    /** datoAdicional[] */
    datoAdicional?: Array<DatoAdicional>;
}
