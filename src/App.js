
import './App.css';

import Home from './Home';
import {Routes,Route, useNavigate} from "react-router-dom"
import { useEffect, useState } from 'react';
import Nav from './nav/Nav';
import Pet from './home/Pet';
import Footer from './nav/Footer';
import Auth from './auth/Auth';
import New from './home/New';
import SinglePet from './home/SinglePet';


function App() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState(false)
  const [pets, setPets] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
		fetch('https://pet-store-backend.onrender.com/pets')
			.then((res) => res.json())
			.then((data) => setPets(data));

		const user_id = sessionStorage.getItem('user_id');
		console.log(user_id);

		fetch(`https://pet-store-backend.onrender.com/users/${user_id}`).then(
			(response) => {
				console.log(response);
				if (response.status === 200) {
					response.json().then((user) => {
						setIsAuthenticated(true);
						setCurrentUser(user);
					});
				} else {
					response.json().then((user) => {
						setIsAuthenticated(false);
						setCurrentUser({});
					});
				}
			},
		);
	}, []);

	function getUserData(user) {
		setCurrentUser(user);
		setIsAuthenticated(true);
	}

	function logout() {
		sessionStorage.clear();
		setIsAuthenticated(false);
		setCurrentUser({});
	}

	function addPet(pet) {
		fetch('https://pet-store-backend.onrender.com/pets', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(pet),
		}).then((res) => {
			if (res.status === 422) {
				res.json().then((data) => {
					setErrors(true);
					alert(data.error);
				});
			} else {
				res.json().then((data) => {
					setPets([data, ...pets]);
					setErrors(false);
					alert('Pet successfully created.');
					navigate('/pets');
				});
			}
		});
	}

	function editPet(myPet) {
		let likes = parseInt(myPet.likes, 10);
		fetch(`https://pet-store-backend.onrender.com/pets/${myPet.id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				...myPet,
				likes: (likes += 1 || 1),
			}),
		}).then((res) => {
			if (res.status === 422) {
				res.json().then((data) => {
					setErrors(true);
				});
			} else {
				res.json().then((data) => {
					setPets([pets]);
					setErrors(false);
					navigate(`https://pet-store-backend.onrender.com/pets/${data.id}`);
					window.location.reload();
				});
			}
		});
	}

	function deleteProduct(product) {
		fetch(`https://pet-store-backend.onrender.com/pets/${product.id}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				navigate('/');
				window.location.reload();
			});
	}

  return (
    <div className="App">
      <Nav currentUser={currentUser} isAuthenticated={isAuthenticated} logout={logout} />
      <Routes>
        <Route exact path="/" element={<Home isAuthenticated={isAuthenticated} />}/>
        <Route exact path="/new" element={<New currentUser={currentUser} addPet={addPet} />}/>
        <Route exact path="/pets" element={<Pet editPet={editPet} pets={pets} />}/>
        <Route exact path="/pets/:id" element={<SinglePet currentUser={currentUser} />}/>
        <Route exact path="/authentication" element={<Auth getUserData={getUserData} />}/>
      </Routes>
      <Footer />
    </div>
      

  );
}

export default App;
