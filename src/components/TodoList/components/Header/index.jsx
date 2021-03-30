import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.onKeyDown} placeholder="请输入任务名称，按回车键确认" />
      </div>
    )
  }
  onKeyDown = e => {
    if (e.keyCode !== 13) return
    if (!e.target.value) return
    this.props.add(e.target.value)
    e.target.value = ''
  }
}
