import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

export default function SinglePet({currentUser}){

  const [singlePet, setsinglePet] = useState({})
  
  const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/pets/${id}`)
        .then(res => res.json())
        .then(data => setsinglePet(data))

        
    }, [])

     function handleComments(comment){
        const commentValue = {
            comment: comment,
            pet_id: singlePet.id,
            user_id: currentUser.id,
        }
      fetch("http://localhost:3000/comments", {
        method:'POST', 
        headers:{'content-type' : 'application/json'},
        body: JSON.stringify(commentValue)
    })
      .then(res => res.json())
      .then(data => {
        window.location.reload()
        alert("Successfully posted your comment")
      })
  
     }

    function likePost(){
        let likes = parseInt(singlePet.likes, 10)
        fetch(`http://localhost:3000/pets/${singlePet.id}`, {
            method:'PATCH', 
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify({
                likes: likes += 1 || 1
            })
        })
        .then(res => res.json())
        .then(data => {
            setsinglePet(data)
            })
     }
   
    return (
        <>
        <div className="singleB">
        <div>
            <h2>{singlePet.name}</h2>
            <img className="image" alt="#1" src={singlePet.image}/>
        </div>
         
         <div className="single">
            <div className="post-body">
                <span className="text-by">By on 20/11/2022 </span>
                <p className="text">
                {singlePet.description}
                </p>
            </div>
            
            <div className='likes'>
                <button
                    onClick={() => likePost()}
                    className='likes-btn'
                    type='button'>
                    <i className='fa fa-thumbs-up'></i> {singlePet.likes}
                </button>
            </div>
         </div>
       
       <div>

       </div>

       <div>
            <CommentList id={singlePet.id} handleComments={handleComments}/>
       </div>
       <div>
        <CommentForm  handleComments={handleComments}/>
       </div>
        </div>

            
        </>
        
    )

}