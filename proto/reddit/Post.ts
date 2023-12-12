// Original file: proto/reddit.proto

import type { Long } from '@grpc/proto-loader';

// Original file: proto/reddit.proto

export const _reddit_Post_State = {
  NORMAL: 'NORMAL',
  LOCKED: 'LOCKED',
  HIDDEN: 'HIDDEN',
} as const;

export type _reddit_Post_State =
  | 'NORMAL'
  | 0
  | 'LOCKED'
  | 1
  | 'HIDDEN'
  | 2

export type _reddit_Post_State__Output = typeof _reddit_Post_State[keyof typeof _reddit_Post_State]

export interface Post {
  'id'?: (number);
  'title'?: (string);
  'text'?: (string);
  'videoUrl'?: (string);
  'imageUrl'?: (string);
  'author'?: (number);
  'score'?: (number);
  'state'?: (_reddit_Post_State);
  'publicationDate'?: (number | string | Long);
  'subreddit'?: (number);
  'tags'?: (string)[];
  'multimedia'?: "videoUrl"|"imageUrl";
}

export interface Post__Output {
  'id': (number);
  'title': (string);
  'text': (string);
  'videoUrl'?: (string);
  'imageUrl'?: (string);
  'author': (number);
  'score': (number);
  'state': (_reddit_Post_State__Output);
  'publicationDate': (string);
  'subreddit': (number);
  'tags': (string)[];
  'multimedia': "videoUrl"|"imageUrl";
}
