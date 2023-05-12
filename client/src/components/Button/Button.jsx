import React from 'react';

export default (props) => {
    return (
        <button type={props.type} form={props.form}>{props.placeholder}</button>
    )
}