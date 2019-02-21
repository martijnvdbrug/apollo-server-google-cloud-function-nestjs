import { Injectable } from '@nestjs/common';
import {Tesla, TeslaModel} from '../../generated/graphql-types';

@Injectable()
export class TeslaService {

  getTesla(model: TeslaModel): Promise<Tesla> {
    return undefined;
  }
}
