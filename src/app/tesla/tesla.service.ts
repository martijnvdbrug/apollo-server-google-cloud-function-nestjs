import { Injectable } from '@nestjs/common';
import {Tesla, TeslaModel, Wheel} from '../../generated/graphql-types';
import {teslas} from './model/tesla-mock';

@Injectable()
export class TeslaService {

  async getTesla(model: TeslaModel): Promise<Tesla> {
    return teslas.get(model);
  }

  async getWheels(model: TeslaModel): Promise<Wheel> {
    return undefined;
  }
}
