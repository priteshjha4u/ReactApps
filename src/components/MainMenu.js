import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class MainMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {activeLi: ""};
		this.liClick = this.liClick.bind(this);
		this.checkActive = this.checkActive.bind(this);
	}
	
	liClick(v) {
		this.setState({activeLi : v});
	}
	
	checkActive(v) {
		return (v === this.state.activeLi) ? "active" : "";
	}
	
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<input type="checkbox" id="navbar-toggle-cbox" />
					<div className="navbar-header">
						<label htmlFor="navbar-toggle-cbox" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</label>
						<Link to='/home' className="navbar-brand" onClick={() => this.liClick('')}>App Store Home</Link>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li onClick={() => this.liClick('Todo App')} className={this.checkActive('Todo App')}><IndexLink to='/TodoApp' activeClassName='active'>Todo App</IndexLink></li>
							<li onClick={() => this.liClick('Not Exist')} className={this.checkActive('Not Exist')}><IndexLink to='/NotExist' activeClassName='active'>Not Exist</IndexLink></li>
							<li onClick={() => this.liClick('Just For Fun')} className={this.checkActive('Just For Fun')}><IndexLink to='/JustForFun' activeClassName='active'>Just For Fun</IndexLink></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default MainMenu;
