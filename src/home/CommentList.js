import { useEffect, useState } from "react";

export default function CommentList({id,  handleComments}) {
  const [singleComment, setsingleComment] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/comments`)
      .then((res) => res.json())
      .then((data) => {
        setsingleComment(data)
        console.log(data);
      });
  }, []);

  const filteredComments = singleComment.filter((comment) => {
    if (!comment.pet.id === id) return false;
    return comment.pet.id === id;
  });



  return (
    <>
      <h2>Comments</h2>

      {filteredComments
        ? filteredComments.map((comment) => {
            return <li className="text">{comment.comment}</li>
          })
        : <p>No comment to display</p>}
 

    </>
  );
}