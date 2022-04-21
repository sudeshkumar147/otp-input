import React, { useEffect, useState } from 'react'
import style from './style/mystyle.module.css'

const Otp = (props) => {
    const [inpts, setinpts] = useState('');
    useEffect(() => {
        numInputs(props.numberOfInputs)
    },[props]);

    const numInputs = (number) => {
        let inpts = '';

        for(let i = 0; i < number; i++) {
            inpts += `<input type=${ props.type || 'password'} class=${props.inptClass || style.otpinput} placeholder='0' style="width: ${(85/number).toFixed(2)}%;" />`
        }
        setinpts(inpts);
    }

    return (
        <div className={props.mainclass || style.main}>
            <label className={props.labelClass|| style.label}>{props.label || 'OTP: '}</label>
            <div className={style.otpMain} dangerouslySetInnerHTML={{__html: inpts}}>
            </div>
        </div>
    )
}

export default Otp;