import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<footer>
			<div className="wrapper">
				<ul>
					<li>
						<span>Copyright @ 2013. VegaITSourcing All rights reserved</span>
					</li>
				</ul>
				<ul className="right">
					<li>
						<a href="test-link">Terms of service</a>
					</li>
					<li>
						<a href="test-link" className="last">Privacy policy</a>
					</li>
				</ul>
			</div>
		</footer>
		)
	}
}
