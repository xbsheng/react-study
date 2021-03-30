import React, { Component } from 'react'
import Header from './components/Header'
import Item from './components/Item'
import Footer from './components/Footer'
import { nanoid } from 'nanoid'
export default class TodoList extends Component {
  render() {
    const { newsList } = this.state
    return (
      <div>
        <h1>todo</h1>
        <Header add={this.add} />
        {newsList.map(item => (
          <Item
            key={item.id}
            {...item}
            changeState={this.changeState(item.id)}
            handleDelete={this.handleDelete(item.id)}
          />
        ))}
        <Footer
          checkNum={newsList.filter(({ isCheck }) => isCheck).length}
          sumNum={newsList.length}
          handleDeleteDone={this.handleDeleteDone}
          handleAll={this.handleAll}
        />
      </div>
    )
  }
  state = {
    newsList: [
      { id: '1', content: '待办事项1', isCheck: true },
      { id: '2', content: '待办事项2', isCheck: true },
      { id: '3', content: '待办事项3', isCheck: true }
    ]
  }

  add = content => {
    const { newsList } = this.state
    this.setState({ newsList: [{ id: nanoid(), content, isCheck: false }, ...newsList] })
  }

  changeState = id => {
    return isCheck => {
      const { newsList } = this.state
      const newList = newsList.map(item => {
        if (item.id === id) item.isCheck = isCheck
        return item
      })
      this.setState({ newsList: newList })
    }
  }

  handleDelete = id => {
    return () => {
      const { newsList } = this.state
      const newList = newsList.filter(item => item.id !== id)
      this.setState({ newsList: newList })
    }
  }
  handleDeleteDone = () => {
    const { newsList } = this.state
    const newList = newsList.filter(item => !item.isCheck)
    this.setState({ newsList: newList })
  }

  handleAll = flag => {
    const { newsList } = this.state
    const newList = newsList.map(item => {
      item.isCheck = flag
      return item
    })
    this.setState({ newsList: newList })
  }
}
