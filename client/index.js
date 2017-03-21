import React from 'react'
import ReactDom from 'react-dom'
import GenericComponent from './GenericComponent.js'

class Application extends React.Component {
  render () {
    var aBoolean = false
    return <div>
      <h1>Hello, ES6 and React 0.13!</h1>
      <GenericComponent state={aBoolean} />
      <p>
        More info <a href='https://github.com/bradleyboy/codepen-react' target='_blank'>here</a>.
      </p>
    </div>
  }
}

/*
 * Render the above component into the div#app
 */
ReactDom.render(<Application />, document.getElementById('app'))
