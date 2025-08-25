import { ArrayActividades1 } from "./ArrayActividades1";
import { ArrayObservaciones } from "./ArrayObservaciones";
import { CodigoDescripcion } from "./CodigoDescripcion";

/** tns:ConsultarActividadesVigentesResponseType */
export interface TnsconsultarActividadesVigentesResponseType {
    /** arrayActividades */
    arrayActividades?: ArrayActividades1;
    /** arrayErrores */
    arrayErrores?: ArrayObservaciones;
    /** evento */
    evento?: CodigoDescripcion;
}
