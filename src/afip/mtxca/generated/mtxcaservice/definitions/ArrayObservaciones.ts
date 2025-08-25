import { CodigoDescripcion } from "./CodigoDescripcion";

/**
 * arrayObservaciones
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ArrayObservaciones {
    /** codigoDescripcion[] */
    codigoDescripcion?: Array<CodigoDescripcion>;
}
