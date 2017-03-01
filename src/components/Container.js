import React, { Component } from 'react';
import MainMenu from './MainMenu';

class Container extends Component {
  render() {
    return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-md-12">
						<MainMenu/>
						{this.props.children}
					</div>
				</div>
			</div>
      
    );
  }
}

export default Container;
