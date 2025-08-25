import { Actividad } from "./Actividad";

/**
 * arrayActividades
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ArrayActividades {
    /** actividad[] */
    actividad?: Array<Actividad>;
}
