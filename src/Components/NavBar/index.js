import "./style.css"

function NavBar () {
    return (
        <div className="NavContainer">
            <p id="NavTitle">Here a Title</p>
            <div className="LinkContainer">
                <a className="Link" href="http://localhost:3000/">Somthing</a>
                <a className="Link" href="http://localhost:3000/">Somthing</a>
                <a className="Link" href="http://localhost:3000/">Somthing</a>
                <a className="Link" href="http://localhost:3000/">Somthing</a>
                <a className="Link" href="http://localhost:3000/">Somthing</a>
                <a className="Link" href="http://localhost:3000/">Somthing</a>
                <a className="Link" href="http://localhost:3000/">Somthing</a>
            </div>
            <div className="FreeDelivery">
                <h2 className="BoxTitle">Free Delivery</h2>
                <p className="TextFreeDelivery">Something </p>
                <p className="TextFreeDelivery">Something</p>
                <p className="TextFreeDelivery">Something</p>
            </div>
        </div>
    )
}

export default NavBar
