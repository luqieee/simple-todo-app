import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return(
            <div className="todoList">
                <div className="todoListHeader">
                    <form>
                        <input placeholder="Zadanie" />
                        <button type="submit"> Dodaj </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;