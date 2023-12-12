import { comments } from '../../db/db.ts';
import * as grpc from '@grpc/grpc-js';

export const expandCommentBranch = (call, callback) => {
    // Extract commentId and limit from the call
    const { commentId, limit } = call.request;

    // Helper function to get top N comments
    const getTopComments = (parentId, limit) => 
        comments.filter(comment => comment.parent_id === parentId)
                .sort((a, b) => b.score - a.score)
                .slice(0, limit);

    // Find the initial comment
    const initialComment = comments.find(comment => comment.id === commentId);
    if (!initialComment) {
        callback({
            code: grpc.status.NOT_FOUND,
            message: `Comment with ID ${commentId} not found.`
        });
        return;
    }

    // Get top N comments for the initial comment
    const topLevelComments = getTopComments(commentId, limit);

    // Get top N comments for each of the top level comments
    const commentBranches = topLevelComments.map(topLevelComment => ({
        comment: topLevelComment,
        leaf: getTopComments(topLevelComment.id, limit)
    }));

    // Respond with the comment branches
    callback(null, { branches: {parent: initialComment , children: commentBranches} });
};