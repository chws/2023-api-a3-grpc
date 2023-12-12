import { testFunction } from "../client/testFunction";

// Mock Client
const mockClient = {
    GetPost: function ({ postId }, callback) {
        // Mock response based on postId
        const mockPost = { id: postId, title: 'Mock Post', text: 'This is a mock post.' };
        callback(null, { post: mockPost });
    },
    GetTopComments: function ({ postId, limit }, callback) {
        // Mock response based on postId and limit
        const mockComments = [{ id: 1, content: 'Mock Comment 1' }];
        callback(null, { comments: mockComments });
    },
    ExpandCommentBranch: function ({ commentId, limit }, callback) {
        // Mock response based on commentId and limit
        const mockBranches = { children: [{ comment: { id: 2, content: 'Mock Reply', score: 5 } }] };
        callback(null, { branches: mockBranches });
    }
};

describe('RedditClient testFunction', () => {
    test('should handle valid postId correctly', done => {
        const validPostId = 1;
        testFunction(mockClient, validPostId, 1, (err, mostVotedChildComment) => {
            expect(err).toBeNull();
            expect(mostVotedChildComment).toBeDefined();
            expect(mostVotedChildComment.comment).toMatchObject({ id: 2, content: 'Mock Reply', score: 5 });
            done();
        });
    });

});