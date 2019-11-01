import React, { Component } from 'react';

class Answer extends Component {
  constructor() {
    super();
    this.state = {
      hidden: true
    };
  }
  render() {
    return (
      <div>
        <button className='revealBtn'
          onClick={() => {
            this.props.showAnswer();
          }}
        >
          Click to Reveal Answer
        </button>
        <p className={this.props.hidden} id='question'>
          {this.props.answer}
        </p>
      </div>
    );
  }
}

export default Answer;
