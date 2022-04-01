import React from 'react'
import Special from '../Special/Special'

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <p>House:{house}</p>
            <h3>My Self</h3>
            <Special ornament={ornament}></Special>
        </div>
    )
}

export default MySelf