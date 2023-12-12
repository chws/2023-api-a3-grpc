// Original file: proto/reddit.proto

import type { PostUpdate as _reddit_PostUpdate, PostUpdate__Output as _reddit_PostUpdate__Output } from '../reddit/PostUpdate';
import type { CommentUpdate as _reddit_CommentUpdate, CommentUpdate__Output as _reddit_CommentUpdate__Output } from '../reddit/CommentUpdate';

export interface MonitorUpdatesResponse {
  'postUpdate'?: (_reddit_PostUpdate | null);
  'commentUpdate'?: (_reddit_CommentUpdate | null);
  'updateType'?: "postUpdate"|"commentUpdate";
}

export interface MonitorUpdatesResponse__Output {
  'postUpdate'?: (_reddit_PostUpdate__Output | null);
  'commentUpdate'?: (_reddit_CommentUpdate__Output | null);
  'updateType': "postUpdate"|"commentUpdate";
}
