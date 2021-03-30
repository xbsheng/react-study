import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  render() {
    const { mouse } = this.state
    const { content, isCheck } = this.props
    return (
      <div
        className="item"
        onMouseEnter={this.onMouse(true)}
        onMouseLeave={this.onMouse(false)}
        style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
      >
        <div>
          <input type="checkbox" onChange={this.changeState} defaultChecked={isCheck} />
          <span>{content}</span>
        </div>

        <button onClick={this.handleDelete} style={{ display: mouse ? 'inline-block' : 'none' }}>
          删除
        </button>
      </div>
    )
  }
  state = {
    mouse: false
  }
  onMouse = mouse => {
    return () => {
      this.setState({ mouse })
    }
  }
  changeState = e => {
    this.props.changeState(e.target.checked)
  }
  handleDelete = () => {
    this.props.handleDelete()
  }
}
