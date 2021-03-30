import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>parent组件</h1>
        <A
          header={() => <h1 style={{ color: 'skyblue' }}>新的header</h1>}
          render={props => <B {...props} />}
          footer={() => <button>确认</button>}
        />
      </div>
    )
  }
}

class A extends Component {
  state = { name: 'zs' }
  render() {
    return (
      <div style={{ backgroundColor: '#ddd' }}>
        {this.props.header ? this.props.header() : <p>默认header</p>}
        <hr />
        <h2>这是A组件</h2>
        <u style={{ color: 'red', fontWeight: 'bold' }}>{this.props.render({ name: this.state.name, age: 18 })}</u>
        <hr />
        {this.props.footer ? this.props.footer() : <p>默认footer</p>}
      </div>
    )
  }
}
class B extends Component {
  render() {
    return (
      <div {...this.props}>
        <h2>这是B组件</h2>
        <p>
          通过props接收到的值{this.props.name}
          {this.props.age}
        </p>
      </div>
    )
  }
}
