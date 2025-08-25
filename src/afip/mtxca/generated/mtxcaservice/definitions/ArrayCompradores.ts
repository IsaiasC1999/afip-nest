import { Comprador } from "./Comprador";

/**
 * arrayCompradores
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ArrayCompradores {
    /** comprador[] */
    comprador?: Array<Comprador>;
}
