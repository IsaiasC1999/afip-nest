
/**
 * item
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface Item {
    /** xsd:int */
    unidadesMtx?: number;
    /** xsd:string */
    codigoMtx?: string;
    /** xsd:string */
    codigo?: string;
    /** xsd:string */
    descripcion?: string;
    /** DecimalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    cantidad?: string;
    /** xsd:short */
    codigoUnidadMedida?: number;
    /** DecimalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    precioUnitario?: string;
    /** DecimalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importeBonificacion?: string;
    /** xsd:short */
    codigoCondicionIVA?: number;
    /** ImporteSubtotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importeIVA?: string;
    /** ImporteSubtotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importeItem?: string;
}
