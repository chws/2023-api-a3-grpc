import { comments } from '../../db/db.ts';

export const getTopComments = (call, callback) => {
    // Extract postId and limit from the call
    const { postId, limit } = call.request;

    // Filter and sort comments for the given post
    const topComments = comments
        .filter(comment => comment.post_id === postId)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

    // Respond with the top N comments
    callback( null, { comments: topComments });
};