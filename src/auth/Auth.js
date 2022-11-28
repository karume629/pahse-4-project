import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Auth({getUserData}){

    const [hasLoggedIn, sethasLoggedIn] = useState(false);
    
    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });
    }, [])

    const {
        register,
        handleSubmit,
    } = useForm();

    const {
    register: register2,
    handleSubmit: handleSubmit2,
    } = useForm();

      const onLoginSubmit = (loginData) => handleUserLogin(loginData);
      const onRegisterSubmit = (registerData) => handleUserRegistration(registerData);

      function handleUserLogin(loginData){ 
        fetch("/login", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
              sethasLoggedIn(false)
              toast.error(`${data.error}`, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: false,
                  progress: undefined,
                  theme: "colored",
              });
            }
            else{
              getUserData(data)
              console.log(data)
              toast.success(`Welcome back ${data.username}`, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: false,
                  progress: undefined,
                  theme: "colored",
              });
              sessionStorage.setItem("user_id", JSON.stringify(data.id))
              sethasLoggedIn(true)
            }
          })    
        }

        function handleUserRegistration(registerData){
            console.log(registerData);
            fetch("/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(registerData)
            })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data);
                    sethasLoggedIn(false)
                    toast.error(`${data.error}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                    });
            }
            else{
                sethasLoggedIn(true)
                sessionStorage.setItem("user_id", JSON.stringify(data.id))
                getUserData(data)
                toast.success(`Registration successfull. Welcome ${data.username} to NewsApp`, {
                    position: "top-center",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
                
            }
          })         
        }
    

      if (hasLoggedIn) {
        return <Navigate to="/" />
      }  

    return(
        <>
        <ToastContainer />
            <div className="container">
                <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={handleSubmit2(onLoginSubmit)} action="" className="sign-in-form">
                    <h2 className="title">Login Here!..</h2>
                    
                    <div className="input-field">
                        <input type="text" name="usuario" {...register2("username")} 
                        autoComplete="username" placeholder="Username" required="yes" />
                    </div>

                    <div className="input-field">
                        <input type="password" name="contraseña" {...register2("password")} 
                        autoComplete="current-password" placeholder="Password" id="id_password" required="yes" />
                    </div>
                    
                    <input type="submit" value="Sign in" className="btn solid" />
                    
                    </form>

                    <form onSubmit={handleSubmit(onRegisterSubmit)} action="" className="sign-up-form">
                    <h2 className="title">Register Now!..</h2>
                    <div className="input-field">
                        <input type="text" name="usuario" {...register("username")} 
                        autoComplete="username" placeholder="Username" required="yes" />
                    </div>
                    <div className="input-field">
                        <input type="email" name="correo" {...register("email")} 
                        autoComplete="email" placeholder="Email" required="yes" />
                    </div>
                    <div className="input-field">
                        <input type="url" name="correo" {...register("avatar")} 
                        autoComplete="url" placeholder="Profile URL" required="yes" />
                    </div>
                    <div className="input-field">
                        <input type="password" name="contraseña" {...register("password")} 
                        autoComplete="current-password" placeholder="Password" id="id_reg" required="yes" />
                        <i className="far fa-eye" id="toggleReg" style={{cursor: "pointer"}}></i>
                    </div>
                    
                    <input type="submit" value="Create account" className="btn solid" />
                    
                    </form>
                </div>
                </div>
                <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                    <h3>You don't have an account?</h3>
                    <p>Create your account right now to order a cup of coffee!</p>
                    <button className="btn transparent" id="sign-up-btn">Register</button>
                    </div>
                    <img src="img/log.svg" className="image" alt="" />
                </div>
            
                <div className="panel right-panel">
                    <div className="content">
                    <h3>Already have an account?</h3>
                    <p>Login to see your notifications and post your favorite photos</p>
                    <button className="btn transparent" id="sign-in-btn">Sign in</button>
                    </div>
                    <img src="img/register.svg" className="image" alt="" />
                </div>
                </div>
            </div>
        </>
    )
}