import React, { Component } from 'react'
import KeyHandler, {KEYPRESS, KEYDOWN, KEYUP} from 'react-key-handler'

class SuggestionBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: [],
      selected: 0,
      showLog: false
    }
  }

  toggleLog = evt => {
    evt.preventDefault()
    this.setState({ showLog: !this.state.showLog })
  }

  render() {
    const sampleSuggestions = [
      'dog',
      'cat',
      'fish',
      'monkey',
      'tiger',
      'giraffe'
    ]

    const { selected, showLog } = this.state
    const { keyValue } = this.props

    console.log('keyValue:  ', keyValue)

    return (
      <div className="suggestion-container">
        <div className="suggestion-list">
          {sampleSuggestions.map((suggestion, i) => (
            <div key={i}
              className={`suggestion-item ${i === 0 && 'suggestion-selected'}`}
            >
              <p className="suggestion-text">{suggestion}</p>
            </div>
          ))}
        </div>
        <div className="instruction-container">
          <h3 className="suggestion-title subtitle">Suggestions</h3>
          <ul className="instructions">
            <li>- Hit Tab To Complete</li>
            <li>- Select Options With Arrow Keys</li>
          </ul>
        </div>
        
        <KeyHandler keyEventName={KEYPRESS} keyValue="s" onKeyHandle={this.toggleLog} />

        {showLog &&
          <h1>You hit "S" Key!</h1>
        }

      </div>
    )
  }
}

export default SuggestionBar
