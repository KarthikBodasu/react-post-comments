import React from 'react';
import Comment from './Comment';

// Sample Data
const postData = {
  title: "I love my dog, but I’m not bringing that big idiot everywhere with me",
  comments: [
    {
      id: 1,
      user: "Massive_Mission_6386",
      text: "I love my dog, but I’m not bringing that big idiot everywhere with me",
      replies: [
        {
          id: 101,
          user: "Key_Warthog_1550",
          text: "Yeah, my dog is wonderful and extremely friendly but his manners go out the window when he sees children so he stays home.",
          replies: [],
        },
      ],
      moreReplies: 17,
    },
  ],
};

const Post = () => {
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      {/* Post Title */}
      <h2>{postData.title}</h2>

      {/* Comments */}
      <div>
        {postData.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
