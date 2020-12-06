import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { Route, BrowserRouter ,Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
     
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals