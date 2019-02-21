import {Injectable} from '@nestjs/common';
import {IResolvers} from 'apollo-server-cloud-functions';
import {TeslaService} from './tesla.service';

@Injectable()
export class TeslaResolver {

  constructor(private teslaService: TeslaService) {}

  get resolvers(): IResolvers {
    return {
      Query: {
        Tesla: async (_, {orderId}, {headers, auth}, info) => ''
      },
      Mutation: {
        // orderToLeasewise: async (_, {orderId}, {headers, auth}, info) => this.orderService.orderToLeaseWise(orderId)
      }
    };
  }
}