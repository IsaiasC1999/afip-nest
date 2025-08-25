
/**
 * subtotalIVA
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface SubtotalIva {
    /** xsd:short */
    codigo?: number;
    /** ImporteSubtotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importe?: string;
}
