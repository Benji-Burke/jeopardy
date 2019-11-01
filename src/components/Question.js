import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div className='my-question'>
        <h1>Let's Play!</h1>
          <div>
        <button className='getQuestion' onClick={() => this.props.getQuestion()}>Get Question</button>
        </div>
        <h2>Category: {this.props.category}</h2>
        
        <h3 className='points'>Points: {this.props.points}</h3>
        <div>
          <h3>Question:</h3>
          <div className={this.props.isNotVisible}>{this.props.question}</div>
        </div>


      


        {/* <div>
        <h3 className='answer' id="revealAnswer">Answer: {this.props.answer}</h3>
        <button className='button-primary' onClick={this.props.revealAnswer}>
          Click to Reveal Answer
        </button>
        </div> */}
      </div>
    );
  }
}

export default Question;
