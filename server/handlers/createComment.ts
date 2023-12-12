import { comments } from '../../db/db.ts';

export const createComment = (call, callback) => {
    // Extract comment data from the call
    const { author, content, parent_id, post_id } = call.request;

    // Generate a new ID for the comment
    const newId = comments.length > 0 ? Math.max(...comments.map(comment => comment.id)) + 1 : 1;

    // Create a new comment object
    const newComment = {
        id: newId,
        author,
        content,
        parent_id,
        post_id,
        score: 0, // Initialize score to 0
        status: 'NORMAL', // Default status to 'NORMAL'
        publication_date: Date.now(), // Use current timestamp
    };

    // Add the new comment to the comments array
    comments.push(newComment);

    // Respond with the new comment ID and a success message
    callback(null, { comment_id: newId, message: "Comment created successfully" });
};