
/**
 * comprador
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface Comprador {
    /** xsd:short */
    codigoTipoDocumento?: number;
    /** xsd:long */
    numeroDocumento?: number;
    /** PorcentajeSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    porcentaje?: string;
}
