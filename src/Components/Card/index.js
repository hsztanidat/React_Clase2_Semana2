import "./style.css"

function Card ({arr}) {
    return(
        <div className="MyGrid">
        {arr.map((card)=>(
            <div className="Card">
            <img alt="lacampina" className="MyImg" src={card.productImg}></img>
            <div className="TextCardsContainer">
                <p className="ProductName">{card.product}</p>
                <p className="Description">{card.description}</p>
                <div className="PriceContainer">
                    <p className="Something">Price</p>
                    <button className="Price">s/. {card.price}</button>
                </div>
            </div>
            {console.log(arr)}
        </div>
        ))}
        </div>
        
    )
    
}


export default Card