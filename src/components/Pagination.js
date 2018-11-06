import React, { Component } from 'react'

export default class Pagination extends Component {
	render() {
		return (
			<div className="pagination">
				<ul>
					<li>
						<a href="clientLinkTo">1</a>
					</li>
					<li>
						<a href="clientLinkTo">2</a>
					</li>
					<li>
						<a href="clientLinkTo">3</a>
					</li>
					<li className="last">
						<a href="clientLinkTo">Next</a>
					</li>
				</ul>
			</div>
		)
	}
}
