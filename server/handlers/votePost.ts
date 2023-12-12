import { posts } from '../../db/db.ts';
import * as grpc from '@grpc/grpc-js';

export const votePost = (call, callback) => {
    // Extract post_id and vote from the call
    const { postId, vote } = call.request;

    // Find the post by ID
    const post = posts.find(p => p.id === postId);

    if (post) {
        // Update the score of the post
        post.score += vote ? 1 : -1;

        // Respond with success message
        callback(null, { postId: postId, message: "Post voted successfully" });
    } else {
        // Respond with an error message if the post was not found
        callback({
            code: grpc.status.NOT_FOUND,
            message: `Post with ID ${postId} not found.`
        });
    }
};