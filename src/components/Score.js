import React, {Component} from 'react';

class Score extends Component {
    render() {
        return(
            <div className="my-score">
                <h1>Score: {this.props.score}</h1>
            <button className ='btn' onClick={this.props.decreaseScore}>Decrease</button>
            <button className='btn' onClick={this.props.increaseScore}>Increase</button>
            <button className='btn' onClick={this.props.resetScore}>Reset</button>
            </div>
        )
    }
    }


export default Score;