import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase, decrease, increaseAsync } from '../../redux/actions/count.js'
import Person from './Person'

class Count extends Component {
  render() {
    return (
      <div>
        <h1>结果为{this.props.count}</h1>
        <select ref={c => (this.selectNum = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.increaseAsync}>异步+</button>
        <hr />
        <Person />
      </div>
    )
  }

  increase = () => {
    const { value } = this.selectNum
    const { increase } = this.props
    increase(value * 1)
  }
  decrease = () => {
    const { value } = this.selectNum
    const { decrease } = this.props
    decrease(value * 1)
  }
  increaseAsync = () => {
    const { value } = this.selectNum
    const { increaseAsync } = this.props
    increaseAsync(value * 1, 500)
  }
}

export default connect(state => ({ count: state.count }), {
  increase,
  decrease,
  increaseAsync
})(Count)
