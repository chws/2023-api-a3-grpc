import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RedditClient as _reddit_RedditClient, RedditDefinition as _reddit_RedditDefinition } from './reddit/Reddit';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  reddit: {
    ChildrenComment: MessageTypeDefinition
    Comment: MessageTypeDefinition
    CommentBranch: MessageTypeDefinition
    CommentUpdate: MessageTypeDefinition
    CreateCommentRequest: MessageTypeDefinition
    CreateCommentResponse: MessageTypeDefinition
    CreatePostRequest: MessageTypeDefinition
    CreatePostResponse: MessageTypeDefinition
    ExpandCommentBranchRequest: MessageTypeDefinition
    ExpandCommentBranchResponse: MessageTypeDefinition
    GetPostRequest: MessageTypeDefinition
    GetPostResponse: MessageTypeDefinition
    GetTopCommentsRequest: MessageTypeDefinition
    GetTopCommentsResponse: MessageTypeDefinition
    MonitorUpdatesRequest: MessageTypeDefinition
    MonitorUpdatesResponse: MessageTypeDefinition
    Post: MessageTypeDefinition
    PostUpdate: MessageTypeDefinition
    Reddit: SubtypeConstructor<typeof grpc.Client, _reddit_RedditClient> & { service: _reddit_RedditDefinition }
    ServerHealthRequest: MessageTypeDefinition
    ServerHealthResponse: MessageTypeDefinition
    Subreddit: MessageTypeDefinition
    User: MessageTypeDefinition
    VoteCommentRequest: MessageTypeDefinition
    VoteCommentResponse: MessageTypeDefinition
    VotePostRequest: MessageTypeDefinition
    VotePostResponse: MessageTypeDefinition
  }
}

