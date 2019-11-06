import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import './style'
//引入本地的css文件要在 index.js下 Import，不要在 index.html进行
import './../src/static/bootstrap/css/bootstrap.css'
import  store from './store/store';
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
