import React, { useContext } from 'react'
import { RingContext } from '../GrandPa/GrandPa'

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h4>Special Person</h4>
            <p><small>Gift:{ring}</small></p>
        </div>
    )
}

export default Special