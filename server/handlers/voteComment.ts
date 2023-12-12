import { comments } from '../../db/db.ts';
import * as grpc from '@grpc/grpc-js';

export const voteComment = (call, callback) => {
    // Extract commentId and vote from the call
    const { commentId, vote } = call.request;

    // Find the comment by ID
    const comment = comments.find(c => c.id === commentId);

    if (comment) {
        // Update the score of the comment
        comment.score += vote ? 1 : -1;

        // Respond with success message
        callback(null, { commentId: commentId, message: "Comment voted successfully" });
    } else {
        // Respond with an error message if the comment was not found
        callback({
            code: grpc.status.NOT_FOUND,
            message: `Comment with ID ${commentId} not found.`
        });
    }
};