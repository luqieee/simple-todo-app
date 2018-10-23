import React, { Component } from 'react';

class TodoList extends Component {

    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return(
            <div className="todoList">
                <div className="todoListHeader">
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="Zadanie"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit"> Dodaj </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;