import { Link } from "react-router-dom";

export default function Nav({isAuthenticated, logout, currentUser}){
    return(
        <div>
            <header className="header">
                <Link to="/" className="logo">
                    <img src="https://icon2.cleanpng.com/20180221/eqw/kisspng-dog-tag-cat-pet-pet-footprints-logo-5a8e35a8643669.3161012915192692884105.jpg"
                     alt="Pets" width="70" height="60" />
                </Link>
                
                <nav className="navbar">
                    <div id="close-navbar"></div>
                    {
                        isAuthenticated ?
                        <>
                            <Link to="/">Home</Link>
                            <Link to="/pets">Pets</Link>
                            <Link to="/new">New Pet</Link>
                        </>

                            :

                        <>
                            <Link to="/authentication">Login</Link>
                            
                        </>
                    }
                </nav>

                {
                    isAuthenticated ?                                            
                        <div class="profile-info">
                            <button className="logout" style={{display: "flex", alignItems: "center", marginRight: "10px"}} type="button">
                            <img alt="avatar" src={currentUser.pic} width="50" height="50" class="rounded-circle" />
                               {currentUser.username}
                            </button>
                            <button className="logout" onClick={logout}>Logout</button>
                        </div> 
                          :
                        false
                }
                
            </header>
        </div>
    )
}