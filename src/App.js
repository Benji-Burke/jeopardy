import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Score from './components/Score';
import Question from './components/Question';
import Answer from './components/Answer';
import axios from 'axios';
const url = 'http://jservice.io/api/random'
// const url = 'http://localhost:3000'


class App extends Component {
  constructor(){
    super()
    this.state= {
      question: "",
      category: "",
      answer: "",
      points: "",
      score: 0,
      hidden: "hidden"
    }
    
    this.getQuestion = this.getQuestion.bind(this)
    this.decreaseScore = this.decreaseScore.bind(this)
    this.increaseScore =this.increaseScore.bind(this)
    this.resetScore = this.resetScore.bind(this)
    this.showAnswer = this.showAnswer.bind(this)
  }

  componentDidMount(){
    this.getQuestion();
  }
  
getQuestion=()=> {
  axios(url)
  .then(response => {
    const data = response.data[0];
    console.log('question', data)
    this.setState({
      question: data.question,
      category: data.category.title,
      points: data.value,
      answer: data.answer,
     

    })
  })
}

decreaseScore =()=>{
  this.setState({
    score: this.state.score - this.state.points
  })
}

increaseScore =()=>{
  let score = this.state.score
  
  score = score + this.state.points
  this.setState({
    score: score
  })
}

resetScore =()=>{
  this.setState({
    score:0
  })
}

showAnswer(){
  if (this.state.hidden === 'hidden') {
    this.setState({ hidden: 'reveal'})
  } else if (this.state.hidden=== 'reveal') {
    this.setState({hidden:'hidden'})
  }
}


      

  render() {
    return(
      <div className="App main">
       
          <Header className="main" />
    
          <Score className="main" score={this.state.score} increaseScore={this.increaseScore} decreaseScore={this.decreaseScore} resetScore={this.resetScore}/>
          <Question
          className = "main"
          category = {this.state.category}
           question={this.state.question}
           getQuestion={this.getQuestion}
           points={this.state.points}
           increaseScore={this.increaseScore}
           answer={this.state.answer}
           //hides the answer
          //  revealAnswer={this.state.revealAnswer}
          //   answerView = {this.answerView}
           
           />
           <Answer className="main" answer={this.state.answer} hidden={this.state.hidden} showAnswer={this.showAnswer}/>
     
      </div>
    )
  }
}



export default App;
