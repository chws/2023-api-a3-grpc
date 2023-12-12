export function testFunction(client, postId, limit = 1, callback) {

    client.GetPost({ postId: postId }, (err, response) => {
        if (err) {
            console.error(err);
            return
        }
        console.log("result", response)
        client.GetTopComments({ postId: response.post.id, limit: 1 }, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log("response", result.comments)
            client.ExpandCommentBranch({ commentId: response.comments[0].comment.id, limit: 1 }, (err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }

                const mostVotedChildren = res.commentBranch.replies.reduce((topReply, currentReply) => {
                    return (!topReply || currentReply.comment.score > topReply.comment.score) ? currentReply : topReply;
                }, null);

                if (mostVotedChildren === null) {
                    callback(null, null);
                }
                else {
                    callback(null, mostVotedChildren.comment);
                }
            });

        });
    })
}
