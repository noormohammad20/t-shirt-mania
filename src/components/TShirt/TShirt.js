import React from 'react'
import './TShirt.css'
const TShirt = ({ tShirt }) => {
    const { name, picture, price } = tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default TShirt