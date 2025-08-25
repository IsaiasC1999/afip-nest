import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:InformarCAEANoUtilizadoPtoVtaResponseType */
export interface TnsinformarCaeaNoUtilizadoPtoVtaResponseType {
    /** ResultadoSimpleType|xsd:string|A,O,R */
    resultado?: string;
    /** xsd:date */
    fechaProceso?: Date;
    /** xsd:long */
    CAEA?: number;
    /** NumeroPuntoVentaSimpleType|xsd:int|minInclusive,maxInclusive */
    numeroPuntoVenta?: string;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
