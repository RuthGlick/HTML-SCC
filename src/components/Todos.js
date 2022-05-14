import React, { useState, useEffect } from 'react';
function Todos() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        tasks()

    }, [])

    const tasks = async () => {
        const id = await JSON.parse(localStorage.getItem("currentUser")).id;
        const allTodos = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
        const userTodos = await allTodos.json();
        setTodos(userTodos);
    }

    const order = (event) => {
        switch (event.target.value) {
            case "alphabetical":
                setTodos(todos.sort((a, b) => a.title > b.title ? 1 : -1))
                break;
            case "serial":
                setTodos(todos.sort((a, b) => a.id > b.id ? 1 : -1))
                break;
            case "execution":
                setTodos(todos.sort((a, b) => a.completed < b.completed ? 1 : -1))
                break;
            case "random":
                setTodos(todos.sort(() => Math.random() - 0.5))
                break;
            default:
                break;
        }
    }

    return (
        <div class="center">
            <select class="form-select" aria-label="Default select example" onChange={(event) => {
                order(event);
            }}>
                <option value="serial">serial</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="execution">Execution </option>
                <option value="random">random</option>
            </select>
            <br></br>
            <ul class="list-group">
                {todos.map(todo => <li class="list-group-item">
                    <input type="checkbox" class="form-check-input me-1" checked={todo.completed} />
                   
                    {todo.title}<br></br></li>)}
            </ul>
        </div>
    )
}

export default Todos;