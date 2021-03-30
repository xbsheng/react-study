import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'

import { addPerson } from '../../redux/actions/person.js'

class Person extends Component {
  render() {
    const { personList, count, addPerson } = this.props
    return (
      <div>
        <h3>{count}</h3>
        <input type="text" onChange={e => (this.name = e.target.value)} />
        <input type="text" onChange={e => (this.age = e.target.value)} />
        <button onClick={() => addPerson({ id: nanoid(), name: this.name, age: this.age })}>add</button>
        <ul>
          {personList.map(item => {
            return (
              <li key={item.id}>
                {item.name}---{item.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default connect(state => ({ personList: state.person, count: state.count }), { addPerson })(Person)
