import React, { useState } from 'react';
import Info from "./Info";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom'
import Logout from './Logout';
import LogIn from './LogIn';
import Todos from './Todos';
import Posts from './Posts';
import Body from './Body';
import Albums from './Albums';
import Photos from './Photos';
import '../css.css';

function Application() {

    const user = JSON.parse(localStorage.getItem("currentUser"))
    let { url, path } = useRouteMatch();

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-lightb nav">
                <div class="container-fluid">
                    <h1 class="navbar-brand">Hello {user.username}!</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to={`${url}/Info`}>info</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to={`${url}/Todos`}>Todos</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to={`${url}/Posts`}>Posts</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to={`${url}/Albums`}>Albums</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to={`${url}/Logout`}>log out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        
            <Switch>
                <Route path={`${url}/Info`}>
                    <Info />
                </Route>
                <Route path={`${url}/Logout`}>
                    <Logout />
                </Route>
                <Route path={`${url}/LogIn`}>
                    <LogIn />
                </Route>
                <Route path={`${url}/Todos`}>
                    <Todos />
                </Route>
                <Route exact path={`${url}/Posts`}>
                    <Posts />
                </Route>
                <Route exact path={`${url}/Posts/body`}>
                    <Body />
                </Route>
                <Route exact path={`${url}/Albums`}>
                    <Albums />
                </Route>
                <Route exact path={`${url}/Albums/:id/Photos`}>
                    <Photos />
                </Route>
            </Switch>
        </>)
}

export default Application;