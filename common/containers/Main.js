import React, { Component } from 'react'

class App extends Component {

  state = {
    corpus: ''
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('/api')
    this.setState({ corpus: await response.json() })
  }

  render() {
    const { corpus } = this.state
    return (
      <div>
        <h1>Cholo Ipsum</h1>
        {corpus && corpus.map(({ _id, bioText }) =>
          <p key={_id}>{bioText}</p>
        )}
      </div>
    )
  }
}

export default App 
