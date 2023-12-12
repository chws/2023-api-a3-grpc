import { posts, comments } from '../../db/db.ts';

export const monitorUpdates = (call) => {
    // Set of IDs (as strings) to monitor
    let monitorIds: Set<string> = new Set();

    // Handle incoming messages from the client (adding IDs to monitor)
    call.on('data', request => {
        if (request.post_id) {
            monitorIds.add(`post-${request.postId}`);
        } 
        if (request.commentId) {
            monitorIds.add(`comment-${request.commentId}`);
        }
    });

    // Periodically check for updates and send them to the client
    const interval = setInterval(() => {
        monitorIds.forEach(id => {
            const [type, entityId] = id.split('-');
            let entity;

            if (type === 'post') {
                entity = posts.find(p => p.id === parseInt(entityId));
            } else if (type === 'comment') {
                entity = comments.find(c => c.id === parseInt(entityId));
            }

            if (entity) {
                call.write({
                    update_type: type === 'post' ? { post_update: entity } : { comment_update: entity }
                });
            }
        });
    }, 1000); // Check for updates every second

    // Clean up on stream end
    call.on('end', () => {
        clearInterval(interval);
        call.end();
    });
};