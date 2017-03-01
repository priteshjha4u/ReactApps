/* eslint-disable */
import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
//import logo from './logo.svg';
import './css/App.css';

import Container from './components/Container';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import { JustForFun, JFFInnerPage1, JFFInnerPage2 } from './components/JustForFun';
import TodoApp from './components/Todo/TodoApp';

class App extends Component {
  render() {
    return (
			<Router history={hashHistory}>
        {/*<Route path='/' component={Container}>*/}
        <Route component={Container}>
					{/*<IndexRoute component={Home} /> */} 
					{/*<Route path='/home' component={Home} />*/}
					<Route path='/' component={Home} />
					<Route path='/home' component={Home} />
					<Route path='/TodoApp' component={TodoApp} />
						{/*<Route path='/JustForFun' component={JustForFun} />*/}
					<Route path='JustForFun' component={JustForFun}>
            {/*<IndexRoute component={JFFInnerPage1} />*/}
						<Route path='JFFInnerPage1' component={JFFInnerPage1} />
            <Route path='JFFInnerPage2' component={JFFInnerPage2} />
          </Route>
          <Route path='*' component={PageNotFound} />
        </Route>
      </Router>
    );
  }
}

export default App;
