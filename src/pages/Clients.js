import React, { Component } from 'react'
import Accordion from '../components/Accordion';
import Alphabet from '../components/Alphabet';

const clients = require('../static/clients.json')

export default class Clients extends Component {
	render() {
		return (
			<>
				<h2><i className="ico clients"></i>Clients</h2>
				<div className="grey-box-wrap reports">
					<a href="#new-member" className="link new-member-popup">Create new client</a>
					<div className="search-page">
						<input type="search" name="search-clients" className="in-search" />
					</div>
				</div>
				<div className="new-member-wrap">
					<div id="new-member" className="new-member-inner">
						<h2>Create new client</h2>
						<ul className="form">
							<li>
								<label>Client name:</label>
								<input type="text" className="in-text" />
							</li>								
							<li>
								<label>Address:</label>
								<input type="text" className="in-text" />
							</li>
							<li>
								<label>City:</label>
								<input type="text" className="in-text" />
							</li>
							<li>
								<label>Zip/Postal code:</label>
								<input type="text" className="in-text" />
							</li>
							<li>
								<label>Country:</label>
								<select>
									<option>Select country</option>
								</select>
							</li>
						</ul>
						<div className="buttons">
							<div className="inner">
								<a href="no-path" className="btn green">Save</a>
							</div>
						</div>
					</div>
				</div>
				<Alphabet />
				<div className="accordion-wrap clients">
					{
						clients.map(client => 
							<Accordion title={client.name} key={client.name}>
								<div className="details">
									<ul className="form">
										<li>
											<label>Client name:</label>
											<input type="text" className="in-text" />
										</li>								
										<li>
											<label>Zip/Postal code:</label>
											<input type="text" className="in-text" />
										</li>
									</ul>
									<ul className="form">
										<li>
											<label>Address:</label>
											<input type="text" className="in-text" />
										</li>
										<li>
											<label>Country:</label>
											<select>
												<option>Select country</option>
											</select>
										</li>								
									</ul>
									<ul className="form last">
										<li>
											<label>City:</label>
											<input type="text" className="in-text" />
										</li>
									</ul>
									<div className="buttons">
										<div className="inner">
											<a href="no-path" className="btn green">Save</a>
											<a href="no-path" className="btn red">Delete</a>
										</div>
									</div>
								</div>
							</Accordion>
						)
					}
				</div>
				<div className="pagination">
					<ul>
						<li>
							<a href="no-path">1</a>
						</li>
						<li>
							<a href="no-path">2</a>
						</li>
						<li>
							<a href="no-path">3</a>
						</li>
						<li className="last">
							<a href="no-path">Next</a>
						</li>
					</ul>
				</div>
			</>
		)
	}
}
