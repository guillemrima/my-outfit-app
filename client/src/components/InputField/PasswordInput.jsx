import React from 'react';
import { useState } from 'react';
import passwordOn from './../../assets/icons/eye-outline.svg'
import passwordOff from './../../assets/icons/eye-off-outline.svg'
import style from './../../styles/components/PasswordInput.module.css'

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
        <div className={style.inputField}>
            <div className={style.input}>
                <input 
                    type={passwordInputType} 
                    name={props.name} 
                    value = {props.value} 
                    placeholder={props.placeholder} 
                    onChange={(e) =>props.handleChange(e)}
                    required>
                </input>
            </div>
            <div 
                className={style.watcher_password} 
                onClick = {togglePasswordInputType}>
                    <img src={passwordWatcher}/>
            </div>
        </div>
    )
}