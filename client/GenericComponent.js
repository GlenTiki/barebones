import React from 'react'

export default class GenericComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      something: 'a string'
    }
  }
  render () {
    console.log('in this file')
    var that = this
    return <div>
      <h2>this is {String(this.props.state)}</h2>
      <h2>state: {this.state.something}</h2>
      <input type='button' onClick={function () {
        that.setState({something: 'somethingElse'})
      }} value='click me' />
    </div>
  }
}
