import React from 'react';
import './App.css';
import {Route, Redirect} from 'react-router-dom';
import Counter from "./components/Counter/Counter";

const App: React.FC = () => {
    return (
        <>
            <Route path='/' render={() => (<Redirect to='/Counter'/>)}/>
            <Route path='/Counter' component={Counter}/>
        </>
    );
};

export default App;
