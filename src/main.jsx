import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reportWebVitals from '../reportWebVitals.js';
import './index.css'
import { Provider } from 'react-redux'
import {store} from './stores/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)


reportWebVitals();