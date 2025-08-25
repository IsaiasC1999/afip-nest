
/**
 * comprobanteCAEAResponse
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ComprobanteCaeaResponse {
    /** xsd:long */
    CAEA?: number;
    /** xsd:short */
    codigoTipoComprobante?: number;
    /** NumeroPuntoVentaSimpleType|xsd:int|minInclusive,maxInclusive */
    numeroPuntoVenta?: string;
    /** NumeroComprobanteSimpleType|xsd:long|minInclusive,maxInclusive */
    numeroComprobante?: string;
}
