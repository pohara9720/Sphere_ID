import React, {Component} from 'react'
import styles from './Design.css'

//Components
import {PriceCard} from '../../Components/PriceCard/PriceCard'
import {Slider} from '../../Components/Slider/Slider'
import {Radio} from '../../Components/Radio/Radio'
import {Frequency} from '../../Components/Frequency/Frequency'

//Variables
import {plans,radios} from './variables'

export default class Design extends Component{
    constructor(props){
        super(props)
        this.state ={
            slider:'2',
            active:'USD',
            rate:1,
            frequency:'center'
        }
    }

    componentDidMount(){

    }

    onSlide = (e) => {
        this.setState({slider:e.target.value})
    }

    onCurrency = (c,r) => {
        this.setState({active:c,rate:r})
    }

    onFrequency = (d) => {
        console.log(d)
        this.setState({frequency:d})
    }
    render(){
        console.log(this.state)
        const radio = radios.map((r,i) => 
            <Radio 
                key={i} 
                currency={r.currency} 
                rate={r.rate} 
                active={this.state.active === r.currency ? true : false} 
                toggle={(c,r) => this.onCurrency(c,r)}
            />)

        const cards = plans.map((p,i) => 
            <PriceCard 
                key={i} 
                currency={{country:this.state.active,frequency:this.state.frequency}} 
                plan={p.plan} 
                price={this.state.frequency === 'right' ? (p.price * this.state.rate) * 12 : p.price * this.state.rate}
                crossed={this.state.frequency === 'right' ? (4.99 * this.state.rate) * 12 : 4.99 * this.state.rate}
                free={p.plan === 'BASIC' ? true : false}
            />)
        return(
            <div className={styles.container}>
                <div className='row'>
                    <div className={`c4 ${styles.content}`}>
                        <div className={styles.signup}>
                            <h1>SIGN UP</h1>
                            <div className={styles.radio}>
                                {radio}
                            </div>
                            <div>
                                <Frequency orien={this.state.frequency} click={(e) => this.onFrequency(e)}/>
                            </div>
                        </div>
                    </div>
                    <div className='c8'>
                        <div className={styles.slideContent}>
                            <Slider onSlide={(e) => this.onSlide(e)} value={this.state.slider}/>
                            <div className={styles.cards}>
                                {cards}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='c12'>
                        <div className={styles.fine}>
                            <div>
                                <p>* A one time application fee applies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
