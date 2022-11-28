import {Link} from "react-router-dom"

export default function Hero({isAuthenticated}){
    return(
        <div>
            <section id="home" className="home">
                <div className="content">
                    <h3>
                    KATE'S PET PLANET
                    </h3>
                    {
                        isAuthenticated ? <Link to="/menu" className="btn">View Pets</Link> 
                        : <Link to="/authentication" className="btn">Login</Link>
                    }
                </div>
            </section>
        </div>
    )
}