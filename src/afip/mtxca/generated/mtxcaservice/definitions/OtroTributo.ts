
/**
 * otroTributo
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface OtroTributo {
    /** xsd:short */
    codigo?: number;
    /** xsd:string */
    descripcion?: string;
    /** ImporteTotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    baseImponible?: string;
    /** ImporteTotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importe?: string;
}
