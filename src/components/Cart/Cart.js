import React from 'react'
import './Cart.css'
const Cart = ({ cart, handleRemoveFormCart }) => {
    //conditional rendering option 
    // 1. element variable
    //2. ternary operator condition ? true : false
    //3. && operator (shorthand)
    //4. || operator (shorthand)

    let command
    if (cart.length === 0) {
        command = <p>Please Add AtLeast One Item!!</p>
    }
    else if (cart.length === 1) {
        command = <p>Please Add More!</p>
    }
    else {
        command = <p><small>Thanks For Adding Item</small></p>
    }
    return (
        <div>
            <h2>Item Selected:{cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFormCart(tShirt)} >X</button>
                </p>)
            }

            {/* conditional rendering example */}

            {cart.length === 0 || <p className='orange'>YaY ! You are buying</p>}

            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba!!</p>
            </div>}

            {command}

            {cart.length !== 4 ? <></> : <button>Remove All</button>}

            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    )
}

export default Cart