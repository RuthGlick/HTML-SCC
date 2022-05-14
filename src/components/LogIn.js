import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LogIn() {

    const history = useHistory();

    const [user, setUser] = useState({
        name: '',
        password: ''
    });

    const handleChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value })
    }

    const handleChangeSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        for (let i = 0; i < users.length; ++i) {
            if (users[i].address.geo.lat.slice(-4) === user.password && users[i].username === user.name) {
                localStorage.setItem("currentUser", JSON.stringify(users[i]));
                history.push(`/Application/users/${users[i].id}`)
                return;
            }
        }
        alert("Unauthorized user");
    }

    return (
        < form onSubmit={handleChangeSubmit} class="center">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="color form-label">User name</label>
                <input type="text" placeholder="userName" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} required />
                <div id="emailHelp" class="form-text">We'll never share your details with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="color form-label">Password</label>
                <input type="password" placeholder="password" name="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} required />
            </div>

            <input type="submit" value="log in" class="btn btn-primary" class="btn btn-danger" />
        </form>
    )
}
export default LogIn