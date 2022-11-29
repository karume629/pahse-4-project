import { useState } from "react";
export default function CommentForm({ handleComments }) {
  const [newComment, setNewComment] = useState("");
  function submitComment(e) {
    e.preventDefault();
    handleComments(newComment);
  }
  return (
    <>
      <form name="commentForm" onSubmit={submitComment}>
        <h2>Add Comment</h2>
        <textarea
          onChange={(e) => setNewComment(e.target.value)}
          cols="30"
          rows="10"
          value={newComment}
          required
        ></textarea>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}