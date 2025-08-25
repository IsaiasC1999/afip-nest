
/**
 * puntoVenta
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface PuntoVenta {
    /** NumeroPuntoVentaSimpleType|xsd:int|minInclusive,maxInclusive */
    numeroPuntoVenta?: string;
    /** SiNoSimpleType|xsd:string|S,N */
    bloqueado?: string;
    /** xsd:date */
    fechaBaja?: Date;
}
