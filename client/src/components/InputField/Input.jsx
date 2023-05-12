import React from 'react';
import style from './../../styles/components/Input.module.css'

export default (props) => {
    return (
        <div className={style.input}>
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
        </div>
    )
}