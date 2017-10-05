import React, { Component } from 'react'

import SuggestionBar from './SuggestionBar'
import styles from './Pad.css'

export default class Pad extends Component {
  state = {
      input: ''
  }

  handleInputChange = ({target}) => {
    this.setState({ input: target.value })
  }

  render() {
    const { input } = this.state
    const { keyValue } = this.props
    return (
      <div>
        <h1 className="center title main-title">TypeLess</h1>
        <textarea
          className="main-pad"
          placeholder="Start typing to see suggestions..."
          onChange={this.handleInputChange}
          value={input}
        >
        </textarea>

        <h3 className="center">Output</h3>
        <h4 className="center">{input}</h4>
      </div>
    )
  }
}