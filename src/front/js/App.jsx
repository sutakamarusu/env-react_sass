import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { message: '' }
  }

  async componentWillMount() {
    const json = await fetch('/hello').then(res => res.json())
    this.setState({ message: json.message })
  }
  const name = 'sueyoshi';
  render() {
    return <h1>Hello! {name}</h1>
  }
}

