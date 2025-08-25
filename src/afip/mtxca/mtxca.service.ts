import { Injectable } from '@nestjs/common';
import { join } from 'path';

// OJO con esta ruta: apunta al index generado por wsdl-tsclient.
// En tu screenshot se ve `generated/mtxcaservice/index.ts`.
import { createClientAsync } from './generated/mtxcaservice';

@Injectable()
export class MtxcaService {
    // Usá el WSDL local (recomendado) o la URL remota
    private readonly wsdlPath =
        process.env.MTXCA_WSDL ??
        join(__dirname, 'wsdl', 'MTXCAService.wsdl'); // ej: src/afip/wsdl/MTXCAService.wsdl

    private async getClient() {
        return createClientAsync(this.wsdlPath);
    }

    async dummy() {
        const client = await this.getClient();
        // wsdl-tsclient genera métodos Async por operación
        const [resp] = await client.dummyAsync({});
        return resp;
    }

    async autorizarComprobanteBasic() {

       private wsdlPath = process.env.MTXCA_WSDL ?? 'src/afip/wsdl/MTXCAService.wsdl';

    async autorizarComprobanteBasic() {
        const client = await createClientAsync(this.wsdlPath);

        // 1) Inferimos los tipos directamente del método generado
        type Client = Awaited<ReturnType<typeof createClientAsync>>;
        type Args = Parameters<Client['autorizarComprobanteAsync']>[0];
        type AuthRequest = Args['authRequest'];
        type ComprobanteCAERequest = Args['comprobanteCAERequest'];

        // 2) Armamos los objetos CON TIPO (TS valida campos y tipos)
        const authRequest: AuthRequest = {
            token: process.env.AFIP_TOKEN!,       // de WSAA
            sign: process.env.AFIP_SIGN!,         // de WSAA
            cuitRepresentada: Number(process.env.AFIP_CUIT),
        };

        const comprobante: ComprobanteCAERequest = {
            codigoTipoComprobante: 1,
            numeroPuntoVenta: 4000,
            numeroComprobante: 1,
            fechaEmision: new Date().toISOString().slice(0, 10), // 'YYYY-MM-DD'
            codigoTipoDocumento: 80,
            numeroDocumento: '30000000007',
            condicionIVAReceptor: 1,
            importeGravado: '100.00',
            importeNoGravado: '0.00',
            importeExento: '0.00',
            importeIVA: '21.00',
            importeOtrosTributos: '0.00',
            importeTotal: '121.00',
            // ⚠️ Si el tipo generado exige más campos (ítems, alícuotas, etc.),
            // acá TS te los va a pedir. Completalos según el .ts generado.
        };

        // 3) Args completo y llamado
        const args: Args = {
            authRequest,
            comprobanteCAERequest: comprobante,
        };

        const [resp] = await client.autorizarComprobanteAsync(args);
        return resp;
    }
}
