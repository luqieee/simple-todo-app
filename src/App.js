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

    deleteItem = key => {
      const filterItems = this.state.items.filter(item => {
          return item.key !== key
      });
        this.setState({
            items: filterItems
        })
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
                    deleteItem={this.deleteItem}
                />
            </div>
        );
    }
}

export default App;
