
import './App.css';

import Home from './Home';
import {Routes,Route, useNavigate} from "react-router-dom"
import { useEffect, useState } from 'react';
import Nav from './nav/Nav';
import About from './about/About';
import Coffees from './home/Coffees';
import Contact from './about/Contact';
import Footer from './nav/Footer';
import Auth from './auth/Auth';
import Order from './home/Order';


function App() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState(false)
  const [coffees, setCoffees] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    fetch("/coffees")
    .then(res => res.json())
    .then(data => setCoffees(data))

    fetch("/me").then((response) => {
      if (response.status === 200) {
        response.json().then((user) => {
          setIsAuthenticated(true);
          setCurrentUser(user)
        });
      
      }
      else{
        response.json().then(user => {
          setIsAuthenticated(false);
          setCurrentUser({})
        })
      }
    });

  }, [])


  function getUserData(user) {
    setCurrentUser(user)
    setIsAuthenticated(true)
  }

  function logout(){
    sessionStorage.clear()
    setIsAuthenticated(false)
    setCurrentUser({})
  }

  function addCoffee(product){
    fetch("/coffees", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product)
    })
    .then(res => {
      if (res.status === 422) {
          res.json().then(data => {
            setErrors(true)
              alert(data.error)
          })
      }
      else{
          res.json().then(data => {
            setCoffees([data, ...coffees])
            setErrors(false)
            alert("Product successfully created.")
          })
      }
  })
  }

  function editProduct(product, id){
    fetch(`/coffees/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product)
    })
    .then(res => {
      if (res.status === 422) {
          res.json().then(data => {
              setErrors(true)
          })
      }
      else{
          res.json().then(data => {
            setCoffees([coffees])
            setErrors(false)
            navigate(`/product/${data.id}`)
            window.location.reload()
          })
      }
  })
  }

  function deleteProduct(product){
    fetch(`/products/${product.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
      navigate("/")
      window.location.reload()
    })
  }

  return (
    <div className="App">
      <Nav currentUser={currentUser} isAuthenticated={isAuthenticated} logout={logout} />
      <Routes>
        <Route exact path="/" element={<Home isAuthenticated={isAuthenticated} />}/>
        <Route exact path="/order" element={<Order currentUser={currentUser} addCoffee={addCoffee} />}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/menu" element={<Coffees coffees={coffees} />}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/authentication" element={<Auth getUserData={getUserData} />}/>
      </Routes>
      <Footer />
    </div>
      

  );
}

export default App;
