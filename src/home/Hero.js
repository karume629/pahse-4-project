import {Link} from "react-router-dom"

export default function Hero({isAuthenticated}){
    return(
        <div>
            <section id="home" className="home">
                <div className="content">
                    <h3>
                    Discover the <br />
                    taste of real <br />
                    coffee
                    </h3>
                    {
                        isAuthenticated ? <Link to="/menu" className="btn">Menu</Link> 
                        : <Link to="/authentication" className="btn">Login to order</Link>
                    }
                </div>
            </section>
        </div>
    )
}