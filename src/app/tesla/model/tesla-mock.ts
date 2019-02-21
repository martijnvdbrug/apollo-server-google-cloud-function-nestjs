import {Tesla} from '../../../generated/graphql-types';
import shortid = require('shortid');

export const model3: Tesla = {
  id: shortid.generate(),
  edition: 'Long range performance',
  kwh: 74,
  range: 470,
}