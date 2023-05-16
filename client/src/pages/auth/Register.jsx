import React from 'react';
import { useState } from 'react';
import ButtonForm from './../../components/Button/Button';
import InputForm from './../../components/InputField/Input';
import PasswordInputForm from './../../components/InputField/PasswordInput';
import style from './../../styles/pages/Register.module.css'

export default () => {

    const [formData, setFormData] = useState ({
        email : "",
        password : "",
        confirmedPassword: ""
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        setFormData (prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return (
        <section className={style.register}>
            <div className={style.register_title}>
                <h1>REGISTER</h1>
            </div>
            <div className={style.register_form}>
                <form id="register_form">
                    <div className={style.form_inputField}>
                        <div className={style.label}>
                            <label>Email</label>
                        </div>
                        <div className={style.input}>
                            <InputForm 
                                type = "text"
                                name = "email"
                                value = {formData.email}
                                handleChange = {handleChange}
                            />
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
                                value = {formData.password}
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
                                value = {formData.confirmedPassword}
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