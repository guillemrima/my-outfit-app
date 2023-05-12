import React from 'react';

export default (props) => {
    return (
        <input 
            type={props.type} 
            name={props.name} 
            value = {props.value} 
            placeholder={props.placeholder} 
            onChange = {(e) => props.handleChange(e)}
            onFocus = {props.handleFocus}
            onBlur = {props.handleBlur}
            required
        >

        </input>
    )
}