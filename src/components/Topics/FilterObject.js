import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {name: '', age: 25, married: true}, {dog: true, cat: false, name: ''}, {house: false, cat: false, sad: true}
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput(val){
        this.setState({userInput: val})
    }
    filterArray(prop){
        let arr = this.state.unFilteredArray;
        let newArr = [];
        for(var i = 0; i < arr.length; i++){
            for(var key in arr[i]){
                if(key === prop){
                    newArr.push(arr[i]);
                }
            }
        }
        this.setState({
            filteredArray: newArr
        })
    }
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleInput(e.target.value)} />
                <button className="confirmationButton" onClick={() => {this.filterArray(this.state.userInput)}}>FILTER</button>
                <span className="resultsBox filterObjectRB">Filtered:{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;