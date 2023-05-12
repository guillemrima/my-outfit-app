import React from 'react';
import { useState } from 'react';
import ButtonForm from './../../components/Button/Button';
import InputForm from './../../components/InputField/Input';
import PasswordInputForm from './../../components/InputField/PasswordInput';
import style from './../../styles/pages/Register.module.css'

export default () => {



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
                                // placeholder = ""
                                // value = {}
                                // handleChange = {}
                                // handleFocus = {}
                                // handleBlur = {}
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
                                name = "email"
                                // placeholder = ""
                                // value = {}
                                // handleChange = {}
                                // handleFocus = {}
                                // handleBlur = {}
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