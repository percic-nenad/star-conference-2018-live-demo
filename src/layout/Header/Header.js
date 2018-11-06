import React, { Component } from 'react'
import Navigation from './Navigation';

export default class Header extends Component {
	render() {
		return (
			<header>
			<div className="top-bar"></div>
			<div className="wrapper">
				<a href="index.html" className="logo">
					<img src={require('../../assets/images/logo.png')} alt="VegaITSourcing Timesheet" />
				</a>
				<ul className="user right">
					<li>
						<a href="test-link">Sladjana Miljanovic</a>
						<div className="invisible"></div>
						<div className="user-menu">
							<ul>
								<li>
									<a href="test-link" className="link">Change password</a>
								</li>
								<li>
									<a href="test-link" className="link">Settings</a>
								</li>
								<li>
									<a href="test-link" className="link">Export all data</a>
								</li>
							</ul>
						</div>
					</li>
					<li className="last">
						<a href="test-link">Logout</a>
					</li>
				</ul>
				<Navigation />
			</div>
		</header>
		)
	}
}
