import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:InformarCAEANoUtilizadoResponseType */
export interface TnsinformarCaeaNoUtilizadoResponseType {
    /** ResultadoSimpleType|xsd:string|A,O,R */
    resultado?: string;
    /** xsd:date */
    fechaProceso?: Date;
    /** xsd:long */
    CAEA?: number;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
