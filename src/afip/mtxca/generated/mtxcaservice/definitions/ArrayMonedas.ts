import { CodigoDescripcion1 } from "./CodigoDescripcion1";

/**
 * arrayMonedas
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ArrayMonedas {
    /** codigoDescripcion[] */
    codigoDescripcion?: Array<CodigoDescripcion1>;
}
