import React, { Component } from 'react'
import './style.css'

class Counter extends Component {

  render() {
    return (
    <div className='co-container'>
        <div className='co-num'>{this.props.count}</div>
        <button  className='co-dec' onClick={()=>this.props.OnDecrease(this.props.id)}>
            -
        </button>
        <button  className='co-inc' onClick={()=>this.props.OnIncrease(this.props.id)}>
            +
        </button>
    </div>
    )
  }
}

export default Counter;