// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Tag, PostTags } = initSchema(schema);

export {
  Post,
  Tag,
  PostTags
};