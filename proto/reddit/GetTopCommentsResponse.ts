// Original file: proto/reddit.proto

import type { Comment as _reddit_Comment, Comment__Output as _reddit_Comment__Output } from '../reddit/Comment';

export interface GetTopCommentsResponse {
  'comments'?: (_reddit_Comment)[];
}

export interface GetTopCommentsResponse__Output {
  'comments': (_reddit_Comment__Output)[];
}
