export default function PetList({name, image, likes, editPet, pet}){
    return(
        <>
            <div style={{backgroundImage: `url(${image})`}} className="box">
                
                <img src={image} alt="coffee" />
                <h3>{name}</h3>
                <div className="likes"><button onClick={() => editPet(pet)} className="likes-btn" type="button"><i class="fa fa-thumbs-up"></i> {likes}</button></div>
                
                </div>
        </>
    )
}