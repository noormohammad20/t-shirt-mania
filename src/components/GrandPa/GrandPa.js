import React, { useState } from 'react'
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './GrandPa.css'
const GrandPa = () => {
    const [house, setHouse] = useState(1)
    const ornament = 'Diamond Ring'
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1
        setHouse(newHouseCount)
    }
    return (
        <div className='grandpa' >
            <h4>GranPa</h4>
            <button onClick={handleBuyAHouse}>Buy A House</button>
            <p>House:{house}</p>
            <section style={{ display: 'flex' }}>
                <Father house={house} ornament={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    )
}

export default GrandPa