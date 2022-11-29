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
        <h1>Add Comment</h1>
        <br />
        <br />
        <textarea className="input-comment"
          onChange={(e) => setNewComment(e.target.value)}
          cols="30"
          rows="10"
          value={newComment}
          required
        ></textarea>
        <br></br>
        <input className="btn" type="submit" value="Submit" />
      </form>
    </>
  );
}