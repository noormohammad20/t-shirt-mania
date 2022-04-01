import React, { useContext } from 'react'
import { RingContext } from '../GrandPa/GrandPa'

const Aunty = ({ house }) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <p>House:{house}</p>
            <h5>Aunty</h5>
            <p><small>Ring:{ring}</small></p>
        </div>
    )
}

export default Aunty