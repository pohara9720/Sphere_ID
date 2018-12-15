import React from 'react'
import styles from './Frequency.css'
import PropTypes from 'prop-types'

export const Frequency = (props) => (
    <div className={styles.container}>
        <label onClick={() => props.click('left')}>Monthly</label>
        <div className={props.orien === 'center' ? styles.center : props.orien === 'left' ? styles.left : styles.right}>
            <div></div>
        </div>
        <label onClick={() => props.click('right')}>Yearly</label>
    </div>
)

const p = PropTypes

Frequency.propTypes={
    click: p.func,
    orien: p.string
}