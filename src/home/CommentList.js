import { useEffect, useState } from "react";

export default function CommentList({id,  handleComments}) {
  const [singleComment, setsingleComment] = useState([]);
  useEffect(() => {
    fetch(`https://pet-store-backend.onrender.com/comments`)
			.then((res) => res.json())
			.then((data) => {
				setsingleComment(data);
			});
  }, []);

  const filteredComments = singleComment.filter((comment) => {
    if (!comment.pet.id === id) return false;
    return comment.pet.id === id;
  });

  console.log(filteredComments);



  return (
    <>
      <h1>Comments</h1>
      <br />
      <br />

      {filteredComments.length !== 0
        ? filteredComments.map((comment) => {
            return <li className="text">{comment.comment}</li>
          })
        : <p className="text">No comments yet!</p>}
 

    </>
  );
}