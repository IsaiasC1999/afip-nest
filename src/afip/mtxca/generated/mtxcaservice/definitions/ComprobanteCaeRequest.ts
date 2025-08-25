import { ArrayComprobantesAsociados } from "./ArrayComprobantesAsociados";
import { PeriodoComprobantesAsociados } from "./PeriodoComprobantesAsociados";
import { ArrayOtrosTributos } from "./ArrayOtrosTributos";
import { ArrayItems } from "./ArrayItems";
import { ArraySubtotalesIva } from "./ArraySubtotalesIva";
import { ArrayDatosAdicionales } from "./ArrayDatosAdicionales";
import { ArrayCompradores } from "./ArrayCompradores";
import { ArrayActividades } from "./ArrayActividades";

/**
 * comprobanteCAERequest
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ComprobanteCaeRequest {
    /** xsd:short */
    codigoTipoComprobante?: number;
    /** NumeroPuntoVentaSimpleType|xsd:int|minInclusive,maxInclusive */
    numeroPuntoVenta?: string;
    /** NumeroComprobanteSimpleType|xsd:long|minInclusive,maxInclusive */
    numeroComprobante?: string;
    /** xsd:date */
    fechaEmision?: Date;
    /** CodigoTipoAutorizacionSimpleType|xsd:string|A,E */
    codigoTipoAutorizacion?: string;
    /** xsd:long */
    codigoAutorizacion?: number;
    /** xsd:date */
    fechaVencimiento?: Date;
    /** xsd:short */
    codigoTipoDocumento?: number;
    /** xsd:long */
    numeroDocumento?: number;
    /** xsd:short */
    condicionIVAReceptor?: number;
    /** ImporteSubtotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importeGravado?: string;
    /** ImporteSubtotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importeNoGravado?: string;
    /** ImporteSubtotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importeExento?: string;
    /** ImporteSubtotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importeSubtotal?: string;
    /** ImporteTotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importeOtrosTributos?: string;
    /** ImporteTotalSimpleType|xsd:decimal|minInclusive,maxInclusive,totalDigits,fractionDigits */
    importeTotal?: string;
    /** xsd:string */
    codigoMoneda?: string;
    /** xsd:decimal */
    cotizacionMoneda?: number;
    /** SiNoSimpleType|xsd:string|S,N */
    cancelaEnMismaMonedaExtranjera?: string;
    /** xsd:string */
    observaciones?: string;
    /** xsd:short */
    codigoConcepto?: number;
    /** xsd:date */
    fechaServicioDesde?: Date;
    /** xsd:date */
    fechaServicioHasta?: Date;
    /** xsd:date */
    fechaVencimientoPago?: Date;
    /** xsd:dateTime */
    fechaHoraGen?: Date;
    /** arrayComprobantesAsociados */
    arrayComprobantesAsociados?: ArrayComprobantesAsociados;
    /** periodoComprobantesAsociados */
    periodoComprobantesAsociados?: PeriodoComprobantesAsociados;
    /** arrayOtrosTributos */
    arrayOtrosTributos?: ArrayOtrosTributos;
    /** arrayItems */
    arrayItems?: ArrayItems;
    /** arraySubtotalesIVA */
    arraySubtotalesIVA?: ArraySubtotalesIva;
    /** arrayDatosAdicionales */
    arrayDatosAdicionales?: ArrayDatosAdicionales;
    /** arrayCompradores */
    arrayCompradores?: ArrayCompradores;
    /** arrayActividades */
    arrayActividades?: ArrayActividades;
}
