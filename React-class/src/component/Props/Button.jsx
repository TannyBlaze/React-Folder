import React from 'react'

const Button = ({name,editFunction}) => {
    return (
        <div>
            <button onClick={editFunction}>{name}</button>
        </div>
    )
}

export default Button;