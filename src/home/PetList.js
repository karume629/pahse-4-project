import { Link } from "react-router-dom";

export default function PetList({name, image, likes, editPet, pet, id}){
    return (
			<>
				<Link to={`/pets/${id}`}>
					<div style={{ backgroundImage: `url(${image})` }} className='box'>
						<img src={image} alt='coffee' />
						<h3>{name}</h3>
						<div className='likes'>
							<button
								onClick={() => editPet(pet)}
								className='likes-btn'
								type='button'
							>
								<i className='fa fa-thumbs-up'></i> {likes}
							</button>
						</div>
					</div>
				</Link>
			</>
		);
}