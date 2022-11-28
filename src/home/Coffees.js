import CoffeeList from "./CoffeeList"

export default function Coffees({coffees}){
    return(
        <div>
            <section id="menu" className="menu">
            
            <h1 className="heading">Menu</h1>
            
            <div className="box-container">
                
                {
                    coffees.map(coffee => {
                        return <CoffeeList name={coffee.name} price={coffee.price} image={coffee.image} />
                    })
                }
                
            </div>
            </section>
        </div>
    )
}