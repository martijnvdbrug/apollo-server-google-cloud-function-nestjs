import { Module } from '@nestjs/common';
import {TeslaResolver} from './tesla.resolver';
import { TeslaService } from './tesla.service';

@Module({
  providers: [TeslaResolver, TeslaService],
  exports:[TeslaResolver]
})
export class TeslaModule {

}