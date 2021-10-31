import React from 'react';
import './App.scss';
import {HashRouter, Route, Switch} from "react-router-dom";
import HomePageComponent from "./components/HomePageComponent";
import NotFoundPageViewComponent from "./components/NotFoundPageViewComponent";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePageComponent}/>
                    <Route path='*' exact={true} component={NotFoundPageViewComponent}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
