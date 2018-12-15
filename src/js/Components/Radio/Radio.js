import React from 'react'
import styles from './Radio.css'
import PropTypes from 'prop-types'


export const Radio = (props) => (
    <div  onClick={() => props.toggle(props.currency,props.rate)} className={styles.radio}>
        <div className={props.active ? styles.active : styles.radioBtn}>
            <div></div>
        </div>
        <label>{props.currency}</label>
    </div>
)

const p = PropTypes

Radio.propTypes={
    toggle: p.func,
    currency: p.string,
    rate:p.number
}