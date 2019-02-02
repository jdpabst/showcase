import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput(val){
        this.setState({userInput: val})
    }

    filterNames(string){
        let unfiltered = this.state.unFilteredArray;
        let newArr = [];
        for(var i = 0; i < unfiltered.length; i++){
            if(unfiltered[i].toLowerCase().includes(string)){
                newArr.push(unfiltered[i]);
            }
        }

        this.setState({
            filteredArray: newArr
        })
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleInput(e.target.value)}/>
                <button className="confirmationButton" onClick={ ()=> this.filterNames(this.state.userInput)}>FILTER</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>

        )
    }
}

export default FilterString;