import React from 'react'
import styles from './Slider.css'
import PropTypes from 'prop-types'

export const Slider = (props) => (
    <div className={styles.container}>
        <div className={styles.bubble}>
            <div>
                <div>{`${parseInt(props.value) * 1000} photos per month`}</div>
            </div>
        </div>
        <h4>USAGE</h4>
        <input onChange={(e) => props.onSlide(e)} type="range" min={1} max={3} value={props.value} className={styles.slider} name='slider' />
        <div className={styles.label}>
            <label className={styles.s}>S</label>
            <label className={styles.m}>M</label>
            <label className={styles.l}>L</label>
        </div>
    </div>
)

const s = PropTypes

Slider.propTypes={
    onSlide:s.func,
    value:s.string
}



