import {Wheel} from '../../../generated/graphql-types';
import shortid = require('shortid');

export const model3Wheels: Wheel[] =[
  {
    id: shortid.generate(),
    inch: 18,
    name: '18" Aero Wheels',
  }, {
    id: shortid.generate(),
    inch: 19,
    name: '19" Sport Wheels',
  }
];

export const modelYWheels: Wheel[] =[
  {
    id: shortid.generate(),
    inch: 42,
    name: 'Nitrogen cold gas thruster',
  }, {
    id: shortid.generate(),
    inch: 22,
    name: '22" 24K Gold plated TSW Bathurst rims',
  }
];
