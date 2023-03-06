import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content?: string | null;
  readonly tags?: (PostTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content?: string | null;
  readonly tags: AsyncCollection<PostTags>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label: string;
  readonly posts?: (PostTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label: string;
  readonly posts: AsyncCollection<PostTags>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerPostTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostTags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postId?: string | null;
  readonly tagId?: string | null;
  readonly post: Post;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostTags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postId?: string | null;
  readonly tagId?: string | null;
  readonly post: AsyncItem<Post>;
  readonly tag: AsyncItem<Tag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostTags = LazyLoading extends LazyLoadingDisabled ? EagerPostTags : LazyPostTags

export declare const PostTags: (new (init: ModelInit<PostTags>) => PostTags) & {
  copyOf(source: PostTags, mutator: (draft: MutableModel<PostTags>) => MutableModel<PostTags> | void): PostTags;
}