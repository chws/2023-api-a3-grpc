// Original file: proto/reddit.proto

import type { Comment as _reddit_Comment, Comment__Output as _reddit_Comment__Output } from '../reddit/Comment';

export interface ChildrenComment {
  'comment'?: (_reddit_Comment | null);
  'leaf'?: (_reddit_Comment)[];
}

export interface ChildrenComment__Output {
  'comment': (_reddit_Comment__Output | null);
  'leaf': (_reddit_Comment__Output)[];
}
