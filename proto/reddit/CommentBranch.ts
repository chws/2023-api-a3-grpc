// Original file: proto/reddit.proto

import type { Comment as _reddit_Comment, Comment__Output as _reddit_Comment__Output } from '../reddit/Comment';
import type { ChildrenComment as _reddit_ChildrenComment, ChildrenComment__Output as _reddit_ChildrenComment__Output } from '../reddit/ChildrenComment';

export interface CommentBranch {
  'parent'?: (_reddit_Comment | null);
  'children'?: (_reddit_ChildrenComment)[];
}

export interface CommentBranch__Output {
  'parent': (_reddit_Comment__Output | null);
  'children': (_reddit_ChildrenComment__Output)[];
}
