import React from 'react';
import style from './../../styles/components/Button.module.css'

export default (props) => {
    return (
        <button 
            type={props.type} 
            form={props.form}>
            {props.placeholder}
        </button>
    )
}