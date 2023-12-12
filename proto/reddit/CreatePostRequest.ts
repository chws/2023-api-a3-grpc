// Original file: proto/reddit.proto


export interface CreatePostRequest {
  'title'?: (string);
  'text'?: (string);
  'videoUrl'?: (string);
  'imageUrl'?: (string);
  'subreddit'?: (string);
  'tags'?: (string)[];
  'multimedia'?: "videoUrl"|"imageUrl";
}

export interface CreatePostRequest__Output {
  'title': (string);
  'text': (string);
  'videoUrl'?: (string);
  'imageUrl'?: (string);
  'subreddit': (string);
  'tags': (string)[];
  'multimedia': "videoUrl"|"imageUrl";
}
