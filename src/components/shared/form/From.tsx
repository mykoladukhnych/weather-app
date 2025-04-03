'use client'

import Input from "@/components/ui/input/Input";

import styles from './form.module.css';
import { useState } from "react";
import Button from "@/components/ui/button/Button";

export default function From() {
    const [signup, setSignup] = useState(false);

    return (
        <form className={styles.form}>
            { signup && <Input type='text' placeholder="Enter your first name..." /> }
            { signup && <Input type='text' placeholder="Enter your last name..." /> }
            <Input type='email' placeholder="Enter your email..." />
            <Input type='password' placeholder="Enter your password..." />
            { signup && <Input type='password' placeholder="Confirm your password..." /> }
            <div className={styles.formBtns}>
                <Button text={signup ? "Sign Up" : "Log In"} onPress={() => alert('Alert')} />
                <span className={styles.span} onClick={() => setSignup(prev => !prev)}>{signup ? 'Do you already have an account? Log in' : 'You can create a new account'}</span>
            </div>
        </form>

    )
}
