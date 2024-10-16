// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letter: 0}

  onChangeInput = event => {
    const enterValue = event.target.value

    const letterCount = enterValue.split(' ').join('').length

    this.setState({letter: letterCount})
  }

  render() {
    const {letter} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="letter-calculator-container">
            <h1 className="heading mb-4">Calculate the Letters you enter</h1>
            <div className="input-container d-flex flex-column">
              <label className="label" htmlFor="phraseInput">Enter the phrase</label>
              <input
                type="text"
                placeholder="Enter the phrase"
                className="input"
                id="phraseInput"
                onChange={this.onChangeInput}
              />
            </div>
            <div className="no-of-letter-container mt-5">
              <p className="no-of-letter pt-4 pb-4">No.of letters: {letter}</p>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="calculator-img"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
