import React from 'react'
import styles from './PriceCard.css'
import PropTypes from 'prop-types'

export const PriceCard = (props) => (
    <div className={styles.container}>
        {
            props.free ? 
                <div className={styles.card}>
                    <h2>Basic</h2>
                    <span className={styles.free}>FREE</span>
                </div>
                :
                <div className={styles.card}>
                    <h2>{props.plan}</h2>
                    <label className={styles.cross}>{props.crossed.toFixed(2)}</label>
                    <span>{props.price.toFixed(2)}</span>
                    <h4>{`${props.currency.country} per ${props.currency.frequency === 'right' ? 'year' : 'month'}`}</h4>
                </div>
        }
        <div className={styles.bubble}>
            <label>CHOOSE</label>
        </div>
    </div>
)


const p = PropTypes

PriceCard.propTypes={
    crossed: p.number,
    plan: p.string,
    price:p.number,
    currency:p.object,
    free:p.bool
}
