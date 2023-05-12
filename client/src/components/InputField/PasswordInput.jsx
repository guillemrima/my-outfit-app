import React from 'react';
import { useState } from 'react';

export default (props) => {
    const [passwordWatcher, setPasswordWatcher]  = useState(passwordOff)
    const [passwordInputType, setPasswordInputType] = useState('password')

    const togglePasswordInputType = () => {
        setPasswordInputType(
            prevPasswordInputType => {
                return prevPasswordInputType === 'password' ? "text" : "password"
            }
        )
        setPasswordWatcher(
            prevPasswordWatcher => {
                return prevPasswordWatcher === passwordOff ? passwordOn : passwordOff 
            }
        )
    }
    return (
        <div className='input-password'>
            <input 
                type={passwordInputType} 
                name={props.name} 
                value = {props.value} 
                placeholder={props.placeholder} 
                onChange={(e) =>props.handleChange(e)}
                required>
            </input>
            <div 
                className='watcher-password' 
                onClick = {togglePasswordInputType}>
                    <img src={passwordWatcher}/>
            </div>
        </div>
    )
}