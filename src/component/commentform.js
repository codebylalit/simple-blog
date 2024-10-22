// src/components/CommentForm.js
import { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment); // Pass the comment back to the parent component (PostDetail)
      setComment(""); // Clear the form after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
