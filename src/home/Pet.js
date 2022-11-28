import PetList from "./PetList"

export default function Pet({pets, editPet}){
    return(
        <div>
            <section id="menu" className="menu">
            
            <h1 className="heading">Pets</h1>
            
            <div className="box-container">
                
                {
                    pets.map(pet => {
                        return <PetList name={pet.name} likes={pet.likes} description={pet.description} 
                        user={pet.user} image={pet.image} editPet={editPet} pet={pet} />
                    })
                }
                
            </div>
            </section>
        </div>
    )
}