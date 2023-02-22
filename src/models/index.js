// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Property, CMA, Comparable } = initSchema(schema);

export {
  Property,
  CMA,
  Comparable
};