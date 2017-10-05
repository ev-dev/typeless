import React, { Component } from 'react'

import SuggestionBar from './SuggestionBar'
import styles from './Pad.css'

export default class Pad extends Component {
  state = {
    input: '',
    selected: 0,
    suggestions: [
      'dog',
      'cat',
      'fish',
      'monkey',
      'tiger',
      'giraffe'
    ]
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleTabAndArrowKeys, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleTabAndArrowKeys, false)
  }

  handleInputChange = ({target}) => {
    this.setState({ input: target.value })
  }

  handleTabAndArrowKeys = evt => {
    const { selected, suggestions, input } = this.state
    
    if (evt.keyCode == 9) { // tab key
      evt.preventDefault()
      this.setState({ input: `${input}${suggestions[selected]} ` })
    }
    else if (evt.keyCode == 38) { // up arrow
      evt.preventDefault()  
      if (selected === 0) 
        this.setState({ selected: suggestions.length - 1 })
      else 
        this.setState({ selected: selected - 1 })
    }
    else if (evt.keyCode == 40) { // down arrow
      evt.preventDefault()
      if (selected === suggestions.length - 1)
        this.setState({ selected: 0 })
      else
        this.setState({ selected: selected + 1})
    }
  }


  render() {
    const { input, suggestions, selected } = this.state

    return (
      <div>
        <h3 className="center subtitle output-title">Output</h3>
        <div className="columns">
          <div className="column output-container">
            <h4 className="center output-text">{input.length ? input : 'Your text here...'}</h4>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <textarea
              id="#text-area"
              className="main-pad"
              placeholder="Start typing to see suggestions..."
              onChange={this.handleInputChange}
              value={input}
              onKeyPress={this.handleTabAndArrowKeys}
            >
            </textarea>
          </div>
          <div className="column suggestion-container">
            <SuggestionBar suggestions={suggestions} selected={selected} />
          </div>
        </div>
      </div>
    )
  }
}
