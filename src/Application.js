import React from 'react'
import Header from './components/Header'
import GenericComponent from './components/GenericComponent'
import Chat from './components/Chat'

export default class Application extends React.Component {
  render () {
    return <div className=''>
      <Header />
      <h1>Hello, ES6 and React 0.15!</h1>
      <GenericComponent />
      <Chat />
      <p>
        barebones hmr test
      </p>
    </div>
  }
}
