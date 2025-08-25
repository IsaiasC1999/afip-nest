
/**
 * comprobanteResponse
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ComprobanteResponse {
    /** xsd:long */
    cuit?: number;
    /** xsd:short */
    codigoTipoComprobante?: number;
    /** NumeroPuntoVentaSimpleType|xsd:int|minInclusive,maxInclusive */
    numeroPuntoVenta?: string;
    /** NumeroComprobanteSimpleType|xsd:long|minInclusive,maxInclusive */
    numeroComprobante?: string;
    /** xsd:date */
    fechaEmision?: Date;
    /** xsd:long */
    CAE?: number;
    /** xsd:date */
    fechaVencimientoCAE?: Date;
}
