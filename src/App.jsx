import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate() {
    console.log("update")
    return true
  }
  render() {
    return (
      <div>
        <h1>ShouldUpdate {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
      </div>
    )
  }
}

export default App
