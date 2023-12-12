import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/reddit';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { RedditHandlers } from '../proto/reddit/Reddit';
import { getPost } from './handlers/getPost.ts';
import { createComment } from './handlers/createComment.ts';
import { getTopComments } from './handlers/getTopComment.ts';
import { voteComment } from './handlers/voteComment.ts';
import { votePost } from './handlers/votePost.ts';
import { expandCommentBranch } from './handlers/expandCommentBranch.ts';
import { monitorUpdates } from './handlers/monitorUpdates.ts';
import { createPost } from './handlers/createPost.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROTO_FILE = '../proto/reddit.proto';
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;
const redditPackage = grpcObj.reddit;

// Default values
let PORT = 9000;
let HOST = '0.0.0.0';

function getServer() {
    const server = new grpc.Server();
    server.addService(redditPackage.Reddit.service, {
        "CreatePost" : createPost,
        "GetPost" : getPost,
        "CreateComment" : createComment,
        "GetTopComments" : getTopComments,
        "VotePost" : votePost,
        "VoteComment" : voteComment,
        "ExpandCommentBranch" : expandCommentBranch,
        "MonitorUpdates" : monitorUpdates
    } as RedditHandlers);
    return server;
}

function main() {
  const server = getServer();

  server.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Your server has started on ${HOST}:${port}`);
    server.start();
  });
}

main();