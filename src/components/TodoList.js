import React from 'react';
import Todo from './todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo text={todo.text}
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        text={todo.text}>   
                        </Todo>          
                ))}
            </ul>
        </div>
    )
}

export default TodoList;