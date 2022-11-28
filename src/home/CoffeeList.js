export default function CoffeeList({name, image, price}){
    console.log(image);
    return(
        <>
            <div className="box">
                
                <img src={image} alt="coffee" />
                <h3>{name}</h3>
                <div className="price">${price}</div>
                
                </div>
        </>
    )
}