import React, {Component} from 'react';

class EvenAndOdd extends Component{
    constructor(props){
        super(props)

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

    }

    handleChange(value){
        this.setState({userInput: value})
    }

    assignEvenAndOdds(userInput){
        let evens = [];
        let odds = [];
        for(var i = 0; i < userInput.length; i++){
            if(userInput[i] % 2 === 0){
                evens.push(userInput[i]);
            } else {
                odds.push(userInput[i]);
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }
    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => { this.assignEvenAndOdds(this.state.userInput)}}>SPLIT</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;