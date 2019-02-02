import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleInput(val){
        this.setState({
            userInput: val
        })
    }

    checkPalindrome(str){
        let check = this.state.userInput;
        let reverse = check.split('');
        reverse = reverse.reverse();
        reverse = reverse.join('')
        if(check === reverse){
            this.setState({palindrome: 'true'})
        } else{
            this.setState({palindrome: 'false'})
        }
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange = {(e) => this.handleInput(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.checkPalindrome(this.state.userInput)}>CHECK</button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;