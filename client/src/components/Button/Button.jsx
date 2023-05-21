import React from 'react';
import style from './../../styles/components/Button.module.css'

export default (props) => {
    return (
        <button className={style.button}
            type={props.type} 
            onSubmit={props.handleSubmit}
            form={props.form}>
            {props.placeholder}
        </button>
    )
}