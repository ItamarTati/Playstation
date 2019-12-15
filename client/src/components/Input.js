import React from 'react'
const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.labelName}</label>
            <input type="text"
                className=""
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.handleChange}
                value={props.value}></input>
        </div>

    )
}

export default Input