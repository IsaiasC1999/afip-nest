
/**
 * comprobanteAsociado
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ComprobanteAsociado {
    /** xsd:short */
    codigoTipoComprobante?: number;
    /** NumeroPuntoVentaSimpleType|xsd:int|minInclusive,maxInclusive */
    numeroPuntoVenta?: string;
    /** NumeroComprobanteSimpleType|xsd:long|minInclusive,maxInclusive */
    numeroComprobante?: string;
    /** xsd:long */
    cuit?: number;
    /** xsd:date */
    fechaEmision?: Date;
}
