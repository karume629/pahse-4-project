import { Link } from "react-router-dom";

export default function Nav({isAuthenticated, logout, currentUser}){
    return(
        <div>
            <header className="header">
                <Link to="/" className="logo">
                    coffee shop
                </Link>
                
                <nav className="navbar">
                    <div id="close-navbar"></div>
                    {
                        isAuthenticated ?
                        <>
                            <Link to="/">Home</Link>
                            <Link to="/menu">Menu</Link>
                            <Link to="/order">Order</Link>
                            <Link to="/about">About</Link>

        
                            
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
                            <img alt="avatar" src={currentUser.avatar} width="50" height="50" class="rounded-circle" />
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