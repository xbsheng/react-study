import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './components/router-test/Home'
import About from './components/router-test/About'
import MyNavLink from './components/MyNavLink'
import Redux from './components/redux-test'
import ReactRedux from './components/react-redux-test'
import ContextTest from './components/context-test'
import renderProps from './components/renderProps-test'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left">
          <MyNavLink to="/home">Home</MyNavLink>
          <MyNavLink to="/about">About</MyNavLink>
          <MyNavLink to="/redux">Redux</MyNavLink>
          <MyNavLink to="/react-redux">React-Redux</MyNavLink>
          <MyNavLink to="/context">context</MyNavLink>
          <MyNavLink to="/renderProps">renderProps</MyNavLink>
        </div>
        <div className="content">
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/redux" component={Redux} />
          <Route path="/react-redux" component={ReactRedux} />
          <Route path="/context" component={ContextTest} />
          <Route path="/renderProps" component={renderProps} />
        </div>
      </div>
    )
  }
}
