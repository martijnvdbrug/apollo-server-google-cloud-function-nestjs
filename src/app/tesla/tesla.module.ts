import {Module} from '@nestjs/common';
import {Tesla, Wheel} from '../../generated/graphql-types';
import shortid = require('shortid');

class IResolvers {
}

@Module({
  providers: [],
  exports: []
})
export class TeslaModule {

  static tesla: Tesla = {
    id: shortid.generate(),
    edition: 'Long range performance',
    model: 'Model 3',
    kwh: 74,
    range: 470
  };

  static wheel: Wheel = {
    id: shortid.generate(),
    inch: 42,
    name: 'Nitrogen cold gas thruster'
  };

  static get resolvers(): IResolvers {
    return {
      Query: {
        Tesla: async (_, {model}, {headers, auth}, info) => this.tesla
      },
      Mutation: {
        pimpMyWheels: async (_, {model}, {headers, auth}, info) => this.tesla
      },
      Tesla: {
        wheels: (tesla: Tesla) => this.wheel
      }
    };
  }

}