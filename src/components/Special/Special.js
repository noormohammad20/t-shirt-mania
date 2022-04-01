import React, { useContext } from 'react'
import { RingContext } from '../GrandPa/GrandPa'

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h4>Special Person</h4>
            <p><small>Gift:{house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Buy a House</button>
        </div>
    )
}

export default Special