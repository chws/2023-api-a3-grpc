import { posts } from '../../db/db.ts';

export const createPost = (call, callback) => {
    // Extract post data from the call
    const { title, text, video_url, image_url, author, score, state, publication_date, subreddit } = call.request;

    // Generate a new ID for the post
    const newId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;

    // Create a new post object
    const newPost = {
        id: newId,
        title,
        text,
        video_url, // Make sure these fields are optional in your Post interface if they are not always provided
        image_url,
        author, 
        score: score || 0, // Default score to 0 if not provided
        state: state || 'NORMAL', // Default state to 'NORMAL' if not provided
        publication_date: publication_date || Date.now(), // Use current timestamp if not provided
        subreddit
    };

    // Add the new post to the posts array
    posts.push(newPost);

    // Respond with the new post ID and a success message
    callback(null, { post_id: newId, message: "Post created successfully" });
};