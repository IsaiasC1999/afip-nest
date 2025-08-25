import { Module } from '@nestjs/common';
import { WsaaService } from './wsaa.service';
import { MtxcaService } from './mtxca.service';
import { WsaaService } from './wsaa/wsaa.service';
import { MtxcaService } from './mtxca/mtxca.service';

@Module({
  providers: [WsaaService, MtxcaService],
  exports: [WsaaService, MtxcaService], // exportás para usar en otros módulos
})
export class AfipModule {}
