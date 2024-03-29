import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CheckOut from "./components/Check-out/CheckOut";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";

// import { createStore } from "redux";
// import rootReducer from './reducers'
// import { Provider } from 'react-redux'


// const store = createStore(rootReducer);

const Root = () => {
    return (
            <BrowserRouter>
                <div className="">
                    <Route exact path="/" component={App} />
                    <Route
                        path="/HomePage/:Orders"
                        render={(props) => <CheckOut {...props} />} />
                </div>
            </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
