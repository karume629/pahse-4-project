export default function Footer(){
    return(
        <div>

        <section className="footer">
            
            <div className="box-container">
                <div className="box">
                
                <i className="fas fa-location-arrow"></i>
                <h3>address</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ducimus quisquam repudiandae maiores? Sapiente quos veritatis.</p>
                
            </div>
            
            
            <div className="box">
                
                <i className="fas fa-envelope"></i>
                <h3>E - mail</h3>
                <a href="#to" className="link">dianahmonginah@gmail.com</a>
                
            </div>
            
            <div className="box">
                <i className="fas fa-phone"></i>
                <h3>call us</h3>
                <p>+020 121 174 5636</p>
            </div>
            
            <div className="box">
                
                <i className="fas fa-clock"></i>
                <h3>opening hours</h3>
                <p>monday - friday: 8:00 - 23:00
                    <br /> saturday: 8:00 - 21:00</p>
            </div>
            </div>
            
            <div className="credit"> 
                Made by <span>Dee Yana</span> | all rights reserved &copy; 2022 </div>
            
            </section>
        </div>
    )
}