import React, { useContext } from 'react'
import { RingContext } from '../GrandPa/GrandPa'

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1
        setHouse(newHouseCount)
    }
    return (
        <div>
            <p>House:{house}</p>
            <h5>Aunty</h5>
            <button onClick={handleHouseIncrease}>Aunty Magic</button>
        </div>
    )
}

export default Aunty