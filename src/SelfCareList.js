import { Component } from 'react';
import icons from  './icons.png';

export class SelfCareList extends Component {
    state={
        userInput: "",
        selfCareList:[]
    }
    onChangeEvent(e){
       this.setState({userInput: e});
       console.log(e)
    }
    addItem(input){
        if (input === ''){
            alert("Please enter an item")
        } else{
        let listArray=this.state.selfCareList;
        listArray.push(input);
        this.setState({selfCareList: listArray, userInput: ''})
    }
}

    deleteItem(){
        let listArray = this.state.selfCareList;
        listArray =[];
        this.setState({selfCareList: listArray})
    }
    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                <input type="text" 
                placeholder="What do you want to do today?" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput}/>
            </div>
            <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.selfCareList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={ icons } width="40px" alt="box"/> {item} 
                    </li>
                ))}
            </ul>
            <div className="container">
            <button onClick={() => this.deleteItem()} className=" btn delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}