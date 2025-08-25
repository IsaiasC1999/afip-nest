import { Item } from "./Item";

/**
 * arrayItems
 * @targetNSAlias `tns`
 * @targetNamespace `http://impl.service.wsmtxca.afip.gov.ar/service/`
 */
export interface ArrayItems {
    /** item[] */
    item?: Array<Item>;
}
