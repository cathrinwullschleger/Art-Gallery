export default function CommentsList({ comments }) {
  return (
    <div>
      {comments && comments.length > 0 && <h2>Comments:</h2>}

      {comments.length === 0 ? (
        <p>No comments yet, add one!</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.timestamp}>
            <p>{comment.text}</p>
            <p>{comment.timestamp.toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

// add id to each comment? use key
