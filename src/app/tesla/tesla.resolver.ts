import {Injectable} from '@nestjs/common';
import {IResolvers} from 'apollo-server-cloud-functions';
import {TeslaService} from './tesla.service';
import {Tesla} from '../../generated/graphql-types';

@Injectable()
export class TeslaResolver {

  constructor(private teslaService: TeslaService) {
  }

  get resolvers(): IResolvers {
    return {
      Query: {
        Tesla: async (_, {model}, {headers, auth}, info) => this.teslaService.getTesla(model)
      },
      Mutation: {
        pimpMyWheels: async (_, {model}, {headers, auth}, info) => {throw Error(`⚡️ This has not been implemented yet...`)}
      },
      Tesla: {
        wheels: (tesla: Tesla) => this.teslaService.getWheels(tesla.model)
      }
    };
  }
}