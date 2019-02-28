import {Tesla, TeslaModel} from '../../../generated/graphql-types';
import shortid = require('shortid');

/**
 * Static list of Tesla's. Normally this would be a database
 */
export const teslas: Map<TeslaModel, Tesla> = new Map<TeslaModel, Tesla>([
  [TeslaModel.Model_3, {
    id: shortid.generate(),
    edition: 'Long range performance',
    model: TeslaModel.Model_3,
    kwh: 74,
    range: 470
  }],
  [TeslaModel.ModelY, {
    id: shortid.generate(),
    edition: 'Fancy pants',
    model: TeslaModel.ModelY,
    kwh: 250,
    range: 2000
  }]
]);