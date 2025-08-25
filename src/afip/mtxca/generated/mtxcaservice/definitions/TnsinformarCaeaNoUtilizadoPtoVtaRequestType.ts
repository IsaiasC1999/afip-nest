import { AuthRequest } from "./AuthRequest";

/** tns:InformarCAEANoUtilizadoPtoVtaRequestType */
export interface TnsinformarCaeaNoUtilizadoPtoVtaRequestType {
    /** authRequest */
    authRequest?: AuthRequest;
    /** xsd:long */
    CAEA?: number;
    /** NumeroPuntoVentaSimpleType|xsd:int|minInclusive,maxInclusive */
    numeroPuntoVenta?: string;
}
