import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './page2/App2';
import App3 from './page3/App3';
import App4 from './page4/App4'; 
import App5 from './Page5/App5';
import App6 from './Page6/App6';
import App7 from './Page7/App7';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

ReactDOM.render(
    <div>
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/page2" component={App2}/>
            <Route path="/impact" component={App3}/>
            <Route path="/projects" component={App4}/>
            <Route path="/ProjectPage1" component={App5}/> 
            <Route path="/ProjectPage2" component={App6}/> 
            <Route path="/ProjectPage3" component={App7}/> 

          </Switch>
          </BrowserRouter>
    </div>,
    document.getElementById('root'));
//<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
