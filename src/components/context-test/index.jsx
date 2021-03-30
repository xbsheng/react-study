import React, { Component } from 'react'
import './index.css'
const MyContext = React.createContext()
const { Provider } = MyContext
export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h1>这是parent组件</h1>
        {/* 给后代组件传值 */}
        <Provider value={{ name: 'zs', age: 18 }}>
          <Child />
        </Provider>
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div className="child">
        <h2>这是child组件</h2>
        <Grand />
      </div>
    )
  }
}

class Grand extends Component {
  // 后代组件声明接收
  static contextType = MyContext
  render() {
    const { name, age } = this.context
    return (
      <div className="grand">
        <h3>这是grand组件</h3>
        <p>从parent组件取到的值为：{`name:${name}, age:${age}`}</p>
      </div>
    )
  }
}
