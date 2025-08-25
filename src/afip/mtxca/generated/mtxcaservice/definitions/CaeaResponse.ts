import { ArrayObservaciones } from "./ArrayObservaciones";

/**
 * CAEAResponse
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface CaeaResponse {
    /** xsd:date */
    fechaProceso?: Date;
    /** xsd:long */
    CAEA?: number;
    /** xsd:int */
    periodo?: number;
    /** xsd:short */
    orden?: number;
    /** xsd:date */
    fechaDesde?: Date;
    /** xsd:date */
    fechaHasta?: Date;
    /** xsd:date */
    fechaTopeInforme?: Date;
    /** arrayObservaciones */
    arrayObservaciones?: ArrayObservaciones;
}
