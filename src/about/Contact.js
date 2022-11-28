import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <div>
            <section id="contact" className="contact">
            
            <h1 className="heading">contact us</h1>
            
            <div className="row">
                
                <div className="image">
                
                <img src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="contact us" />
                
                </div>
                
                <form action="">
                
                <h3>get in touch</h3>
                
                <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input type="text" name="" id="" placeholder="name" />
                </div>
                <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="email" name="" id="" placeholder="email" />
                </div>
                    
                <div className="input-box">
                    <i className="fas fa-phone"></i>
                    <input type="phone" name="" id="" placeholder="phone" />
                </div>
                
                <input type="submit" value="send message" className="btn" />
                
                </form>
                
            </div>
            
            </section>
        </div>
    )
}