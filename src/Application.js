import React from 'react'
import Header from './components/Header'
import GenericComponent from './components/GenericComponent'

export default class Application extends React.Component {
  render () {
    return <div className=''>
      <Header />
      <h1>Hello, ES6 and React 0.15!</h1>
      <GenericComponent />
      <p>
        barebones hmr test
      </p>
    </div>
  }
}
