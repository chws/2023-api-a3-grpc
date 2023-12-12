import { testFunction } from "../client/testFunction";

describe('testFunction', () => {
    let mockApiClient;

    beforeEach(() => {
        // Reset mockApiClient
        mockApiClient = {
            GetPost: jest.fn(),
            GetTopComments: jest.fn(),
            ExpandCommentBranch: jest.fn(),
        };
    });

    it('happy path test', done => {
        mockApiClient.GetPost.mockImplementation((q, callback) => {
            callback(null, { post: { id: 1 } }); 
        });
        mockApiClient.GetTopComments.mockImplementation((q, callback) => {
            callback(null, { 
                comments: [{ comment: { id: 2, score: 10 } }]
            });
        });
        mockApiClient.ExpandCommentBranch.mockImplementation((q, callback) => {
            callback(null, { 
                branches: {
                    parent: { id: 2, score: 10 },
                    children: [
                        { comment: { id: 3, score: 5 } },
                        { comment: { id: 11, score: 50 } } 
                    ]
                }
            });
        });
    
        // Call the testFunction
        testFunction(mockApiClient, 1, 1, (err, result) => {

            expect(err).toBeNull();
            expect(result.score).toBe(50); 
            expect(result.id).toBe(11); 
            expect(result).not.toBeNull();    
            done();
            
        });
    });
 })