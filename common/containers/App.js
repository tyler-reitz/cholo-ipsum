import React, { Component } from 'react'

class App extends Component {

  componentDidMount() {
    this.getData()
    //fetch('/api')
    //  .then(res => res.json())
    //  .then(json => console.log(json)) 
  }

  getData = async () => {
    const response = await fetch('/api')
    console.log(await response.json())
  }

  render() {
    return (
      <div>
        <h1>Cholo Ipsum</h1>
      </div>
    )
  }
}

export default App 
