import React from 'react'

// const Button = ({name,editFunction}) => {
//     return (
//         <div>
//             <button onClick={editFunction}>{name}</button>
//         </div>
//     )
// }

const Button = (props) => {
    console.log(props)
    return (
        <div>
            <button className={props.color}>{props.title}</button>
        </div>
    )
}

export default Button;