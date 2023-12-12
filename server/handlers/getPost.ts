import { posts } from '../../db/db.ts';
import * as grpc from '@grpc/grpc-js';

export const getPost = (call, callback) => {
    // Extract post_id from the call
    const { postId } = call.request;

    // Find the post with the given ID
    const post = posts.find(p => p.id === postId);

    // Check if the post was found
    if (post) {
        // Respond with the found post
        callback( null, { post });
    } else {
        // Respond with an error message if the post was not found
        callback({
            code: grpc.status.NOT_FOUND,
            message: `Post with ID ${postId} not found.`
        });
    }
};