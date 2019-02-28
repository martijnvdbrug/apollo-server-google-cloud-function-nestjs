import {TeslaModel, Wheel} from '../../../generated/graphql-types';
import shortid = require('shortid');

export const wheels: Map<TeslaModel, Wheel[]> = new Map<TeslaModel, Wheel[]>([
    [TeslaModel.Model_3, [  {
      id: shortid.generate(),
      inch: 18,
      name: '18" Aero Wheels',
    }, {
      id: shortid.generate(),
      inch: 19,
      name: '19" Sport Wheels',
    }]],
    [TeslaModel.ModelY, [
      {
        id: shortid.generate(),
        inch: 42,
        name: 'Nitrogen cold gas thruster',
      }, {
        id: shortid.generate(),
        inch: 22,
        name: '22" 24K Gold plated TSW Bathurst rims',
      }
    ]]
]);
