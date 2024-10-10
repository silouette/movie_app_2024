import React from 'react';
import Home from './routes/Home';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Navigation from './components/Navigation';

function App() {
    return (
        // HashRouter가 적용되면 앱이 실행되는 주소에 '#/'이 붙게 된다.
        // Route에는 2가지 props를 전달할 수 있다. -> 1. URL을 위한 path props, 2. URL에 맞는 컴포넌트를 불러주기 위한 component props.
        // Link(Navigation 컴포넌트에 존재), Router 컴포넌트는 반드시 HashRouter 안에 포함되어야 한다.
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
        </HashRouter>
    );
}

export default App;