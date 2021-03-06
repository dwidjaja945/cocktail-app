import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import rootReducer from './reducers';

import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={createStore(rootReducer)}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
