export const users = [
    {id: 1},
    {id: 2}
]

export const posts = [
    {
        id: 1,
        title: 'What is gRPC?',
        text: 'I wonder what gRPC is like',
        video_url: 'https://www.youtube.com/alskdjflkj',
        author: 1, 
        score: 0,
        state: "NORMAL",
        publication_date: 1652893200000,
        subreddit: 1,
    },{
        id: 2,
        title: 'What is GraphQL?', 
        text: 'GraphQL is ...',
        image_url: 'https://www.imagedump.com/as14124',
        author: 1,
        score: 1,
        state: "LOCKED",
        publication_date: 1670544000000,
        subreddit: 1
    }
];

export const comments = [
    {
        id: 1,
        author: 2,
        score: 4,
        status: "NORMAL",
        publication_date: 1670630400000,
        content: "You can refer to this link.",
        post_id: 1
    },{
        id: 2,
        author: 2,
        score: 5,
        status: "NORMAL",
        publication_date: 1670630400000,
        content: "2",
        parent_id: 1,
        post_id: 1
    },{
        id: 3,
        author: 2,
        score: 6,
        status: "NORMAL",
        publication_date: 1670284800000,
        content: "3",
        parent_id: 1,
        post_id: 1
    },{
        id: 4,
        author: 2,
        score: 7,
        status: "NORMAL",
        publication_date: 1670371200000,
        content: "4",
        parent_id: 2,
        post_id: 1
    },{
        id: 5,
        author: 2,
        score: 8,
        status: "NORMAL",
        publication_date: 1670630400000,
        content: "5",
        parent_id: 2,
        post_id: 1
    },{
        id: 6,
        author: 2,
        score: 9,
        status: "NORMAL",
        publication_date: 1670457600000,
        content: "6",
        parent_id: 3,
        post_id: 1
    },{
        id: 7,
        author: 1,
        score: 10,
        status: "NORMAL",
        publication_date: 1670544000000,
        content: "7",
        parent_id: 3,
        post_id: 1
    },
];

export const subreddits = [
    {
        id: 1,
        name: "API",
        visibility: "PUBLIC"
    }
]

