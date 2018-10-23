import React, {Component} from 'react';
import './App.css';
import TodoList from './Todo/TodoList'
import TodoItems from "./Todo/TodoItems";

class App extends Component {

    inputElement = React.createRef()

    constructor() {
        super();
        this.state = {
            items: [],
            currentItem: {text: '', key: ''}
        }
    };

    handleInput = i => {
        const itemText = i.target.value;
        const currentItem = {text: itemText, key: Date.now()};
        this.setState({
            currentItem
        })
    };

    addItem = e => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
            console.log(newItem);
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {text: '', key: ''}
            })
        }
    };

    render() {
        return (
            <div className="App">
                <TodoList
                    addItem={this.addItem}
                    handleInput={this.handleInput}
                    inputElement={this.inputElement}
                    currentItem={this.state.currentItem}
                />
                <TodoItems
                    entries={this.state.items}
                />
            </div>
        );
    }
}

export default App;
