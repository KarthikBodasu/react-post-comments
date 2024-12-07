import React, { useState } from 'react';

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => setShowReplies(!showReplies);

  return (
    <div style={{ marginBottom: '15px' }}>
      {/* Main Comment Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Expand/Collapse Icon */}
        {comment.replies.length > 0 && (
          <button
            onClick={toggleReplies}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
            }}
            aria-expanded={showReplies}
            aria-label={showReplies ? 'Collapse replies' : 'Expand replies'}
          >
            {showReplies ? '-' : '+'}
          </button>
        )}

        {/* Comment Content */}
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>{comment.user}</p>
          <p style={{ margin: 0 }}>{comment.text}</p>
        </div>
      </div>

      {/* Replies Section */}
      {showReplies && comment.replies.length > 0 && (
        <div style={{ marginLeft: '20px', borderLeft: '2px solid #ddd', paddingLeft: '10px' }}>
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}

          {/* Placeholder for "more replies" */}
          {comment.moreReplies && (
            <button
              onClick={() => alert('Load more replies...')}
              style={{
                marginTop: '10px',
                background: 'none',
                border: 'none',
                color: '#007BFF',
                cursor: 'pointer',
              }}
            >
              + {comment.moreReplies} more replies
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
