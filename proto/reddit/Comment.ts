// Original file: proto/reddit.proto

import type { Long } from '@grpc/proto-loader';

// Original file: proto/reddit.proto

export const _reddit_Comment_Status = {
  NORMAL: 'NORMAL',
  HIDDEN: 'HIDDEN',
} as const;

export type _reddit_Comment_Status =
  | 'NORMAL'
  | 0
  | 'HIDDEN'
  | 1

export type _reddit_Comment_Status__Output = typeof _reddit_Comment_Status[keyof typeof _reddit_Comment_Status]

export interface Comment {
  'id'?: (number);
  'author'?: (number);
  'score'?: (number);
  'status'?: (_reddit_Comment_Status);
  'publicationDate'?: (number | string | Long);
  'content'?: (string);
  'parentId'?: (number);
  'postId'?: (number);
}

export interface Comment__Output {
  'id': (number);
  'author': (number);
  'score': (number);
  'status': (_reddit_Comment_Status__Output);
  'publicationDate': (string);
  'content': (string);
  'parentId': (number);
  'postId': (number);
}
