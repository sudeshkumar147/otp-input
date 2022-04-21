import React from 'react'
import style from './style/mystyle.module.css'
const Mobile = (props) => {
    return (
        <div className={props.class ||style.main}>
            <label className={props.labelClass || style.label}>{props.label || 'Mobile:'}</label>
            <input 
                type={props.type || 'number'} 
                maxLength={props.max || 12} 
                max={props.max || 12} 
                className={props.class || style.input} 
                placeholder={props.placeholder || 'Mobile: '}
                onChange={props.onChange || ((d) => console.log('Please pass onChange key from your component') )}
            />
        </div>
    )
}

export default Mobile;