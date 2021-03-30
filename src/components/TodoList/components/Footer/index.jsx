import React, { Component } from 'react'

export default class index extends Component {
  render() {
    const { checkNum, sumNum } = this.props
    return (
      <div>
        <input type="checkbox" defaultChecked={checkNum === sumNum && checkNum !== 0} onChange={this.handleAll} />
        <span>
          {checkNum}/{sumNum}
        </span>
        <button onClick={this.handleDeleteDone} style={{ marginLeft: '20px' }}>
          删除已完成
        </button>
      </div>
    )
  }
  handleDeleteDone = () => {
    this.props.handleDeleteDone()
  }
  handleAll = e => {
    this.props.handleAll(e.target.checked)
  }
}
