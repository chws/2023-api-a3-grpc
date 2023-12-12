import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/reddit.ts';
import { fileURLToPath } from 'url';
import path from 'path'
import { dirname } from 'path';
import { testFunction } from './testFunction.ts';

class RedditClient {
  private client: any;

  constructor(host: string, port: number) {
    const PROTO_FILE = '../proto/reddit.proto'


    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
    const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
    this.client = new grpcObj.reddit.Reddit(
        `0.0.0.0:${9000}`, grpc.credentials.createInsecure()
    )
    const redditPackage = grpcObj.reddit;
    }

  runSequence() {
    testFunction(this.client, 1, 1, (error, result) => {console.log(error, result)});
    // Example data for each operation
    const createPostData = {
        title: "Talk about Harry Potter",
        text: "dlkfjlkj",
        videoUrl: null,
        subreddit: "API"
    };
    const votePostData = {
        postId: 2,
        vote: false 
    };
    const getPostData = {
        postId: 1
    };
    const createCommentData = {
        content: "aliquip eiusmod fugiat consequat irure",
        postId: 2
    };
    const voteCommentData = {
        commentId: 2,
        vote: true
    };
    const getTopCommentsData = {
        postId: 1,
        limit: 2
    };
    const expandCommentBranchData = {
        commentId: 1,
        limit: 1
    };

    // Create Post
    this.client.CreatePost(createPostData, (err, response) => {
      if (err) console.error(err);
      else console.log('Post Created:', response);
    });

    // Vote Post
    this.client.votePost(votePostData, (err, response) => {
      if (err) console.error(err);
      else console.log('Post Voted:', response);
    });

    // Get Post
    this.client.getPost(getPostData, (err, response) => {
      if (err) console.error(err);
      else console.log('Post Retrieved:', response);
    });

    // Create Comment
    this.client.createComment(createCommentData, (err, response) => {
      if (err) console.error(err);
      else console.log('Comment Created:', response);
    });

    // Vote Comment
    this.client.voteComment(voteCommentData, (err, response) => {
      if (err) console.error(err);
      else console.log('Comment Voted:', response);
    });

    // Get Top Comments
    this.client.getTopComments(getTopCommentsData, (err, response) => {
      if (err) console.error(err);
      else console.log('Top Comments:', response);
    });

    // Expand Comment Branch
    this.client.expandCommentBranch(expandCommentBranchData, (err, response) => {
      if (err) console.error(err);
      else console.log('Expanded Comment Branch:', response);
    });

    // Monitor Updates (stream)
    const stream = this.client.monitorUpdates();
    stream.on('data', (data) => {
      console.log('Update received:', data);
    });
    stream.write({postId: 1})
  }
}

const a = new RedditClient("0.0.0.0", 9000);
a.runSequence();
export default RedditClient;