import React from "react"


class Cart extends React.Component {
    render(){
        return (
            <div>
                <ul>

                {this.props.items.map((item) =>(
                    <li>{item.name} {item.price}€</li>
                )).sort((a, b)=> a - b ).reverse()}
                </ul>

            </div>
        )
    }
}

export default Cart;