import React from 'react';
import { useState } from 'react';
import ButtonForm from './../../components/Button/Button';
import InputForm from './../../components/InputField/Input';
import PasswordInputForm from './../../components/InputField/PasswordInput';
import style from './../../styles/pages/Register.module.css'
import passwordValidator from '../../utilities/password_validator';

export default () => {

    const [userData, setUserData] = useState ({
        username : "",
        email : "",
        password : "",
        confirmedPassword: ""
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        setUserData (prevUserData => ({
            ...prevUserData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidPassword = passwordValidator(userData);
        isValidPassword ? console.log("Usuario registrado correctamente") : console.log("Las contraseñas deben coincidir")
    }


    return (
        <section className={style.register}>
            <div className={style.register_title}>
                <h1>REGISTER</h1>
            </div>
            <div className={style.register_form}>
                <form id="register_form" onSubmit={handleSubmit}>
                    <div className={style.input_container}>
                        <div className={style.form_inputField}>
                            <div className={style.label}>
                                <label>Username</label>
                            </div>
                            <div className={style.input}>
                                <InputForm 
                                    type = "text"
                                    name = "username"
                                    value = {userData.username}
                                    handleChange = {handleChange}
                                />
                            </div>
                            
                        </div>
                        <div className={style.form_inputField}>
                            <div className={style.label}>
                                <label>Email</label>
                            </div>
                            <div className={style.input}>
                                <InputForm 
                                    type = "text"
                                    name = "email"
                                    value = {userData.email}
                                    handleChange = {handleChange}
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div className={style.form_inputField}>
                        <div className={style.label}>
                            <label>Password</label>
                        </div>
                        <div className={style.input}>
                            <PasswordInputForm
                                type = "text"
                                name = "password"
                                value = {userData.password}
                                handleChange = {handleChange}
                            />
                        </div>
                        
                    </div>
                    <div className={style.form_inputField}>
                        <div className={style.label}>
                            <label>Confirm password</label>
                        </div>
                        <div className={style.input}>
                            <PasswordInputForm
                                type = "text"
                                name = "confirmedPassword"
                                value = {userData.confirmedPassword}
                                handleChange = {handleChange}
                            />
                        </div>
                        
                    </div>
                    <div className={style.form_submitButton}>
                        <ButtonForm 
                            type = "submit"
                            form = "register_form"
                            placeholder = "REGISTER"
                        />
                    </div>
                </form>
            </div>
            <div className={style.login_link}>
                <p>Already have an Account? <span>Sign In</span></p>
            </div>
        </section>
    )
}