import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<>
				<h2><i className="ico projects"></i>Projects</h2>
				<div className="grey-box-wrap reports">
					<a href="#new-member" className="link new-member-popup">Create new project</a>
					<div className="search-page">
						<input type="search" name="search-clients" className="in-search" />
					</div>
				</div>
				<div className="new-member-wrap">
					<div id="new-member" className="new-member-inner">
						<h2>Create new project</h2>
						<ul className="form">
							<li>
								<label>Project name:</label>
								<input type="text" className="in-text" />
							</li>								
							<li>
								<label>Description:</label>
								<input type="text" className="in-text" />
							</li>
							<li>
								<label>Customer:</label>
								<select>
									<option>Select customer</option>
									<option>Adam Software NV</option>
									<option>Clockwork</option>
									<option>Emperor Design</option>
								</select>
							</li>
							<li>
								<label>Lead:</label>
								<select>
									<option>Select lead</option>
									<option>Sasa Popovic</option>
									<option>Sladjana Miljanovic</option>
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
				<div className="alpha">
					<ul>
						<li>
							<a href="no-path">a</a>
						</li>
						<li>
							<a href="no-path">b</a>
						</li>
						<li>
							<a href="no-path">c</a>
						</li>
						<li>
							<a href="no-path">d</a>
						</li>
						<li>
							<a href="no-path">e</a>
						</li>
						<li className="active">
							<a href="no-path">f</a>
						</li>
						<li>
							<a href="no-path">g</a>
						</li>
						<li>
							<a href="no-path">h</a>
						</li>
						<li>
							<a href="no-path">i</a>
						</li>
						<li>
							<a href="no-path">j</a>
						</li>
						<li>
							<a href="no-path">k</a>
						</li>
						<li>
							<a href="no-path">l</a>
						</li>
						<li className="disabled">
							<a href="no-path">m</a>
						</li>
						<li>
							<a href="no-path">n</a>
						</li>
						<li>
							<a href="no-path">o</a>
						</li>
						<li>
							<a href="no-path">p</a>
						</li>
						<li>
							<a href="no-path">q</a>
						</li>
						<li>
							<a href="no-path">r</a>
						</li>
						<li>
							<a href="no-path">s</a>
						</li>
						<li>
							<a href="no-path">t</a>
						</li>
						<li>
							<a href="no-path">u</a>
						</li>
						<li>
							<a href="no-path">v</a>
						</li>
						<li>
							<a href="no-path">w</a>
						</li>
						<li>
							<a href="no-path">x</a>
						</li>
						<li>
							<a href="no-path">y</a>
						</li>
						<li className="last">
							<a href="no-path">z</a>
						</li>					
					</ul>
				</div>
				<div className="accordion-wrap projects">
					<div className="item">
						<div className="heading">
							<span>BuzzMonitor</span> <span><em>(Nina Media)</em></span>
							<i>+</i>
						</div>
						<div className="details">
							<ul className="form">
								<li>
									<label>Project name:</label>
									<input type="text" className="in-text" />
								</li>
								<li>
									<label>Lead:</label>
									<select>
										<option>Select lead</option>
										<option>Sasa Popovic</option>
										<option>Sladjana Miljanovic</option>
									</select>
								</li>
							</ul>
							<ul className="form">
								<li>
									<label>Description:</label>
									<input type="text" className="in-text" />
								</li>
								
							</ul>
							<ul className="form last">
								<li>
									<label>Customer:</label>
									<select>
										<option>Select customer</option>
										<option>Adam Software NV</option>
										<option>Clockwork</option>
										<option>Emperor Design</option>
									</select>
								</li>
								<li className="inline">
								<label>Status:</label>
								<span className="radio">
									<label for="inactive">Active:</label>
									<input type="radio" value="1" name="status" id="inactive" />
								</span>
								<span className="radio">
									<label for="active">Inactive:</label>
									<input type="radio" value="2" name="status" id="active" />
								</span>
								<span className="radio">
									<label for="active">Archive:</label>
									<input type="radio" value="3" name="status" id="active" />
								</span>
							</li>
							</ul>
							<div className="buttons">
								<div className="inner">
									<a href="no-path" className="btn green">Save</a>
									<a href="no-path" className="btn red">Delete</a>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="heading">
							<span>PWN</span> <span><em>(Clockwork)</em></span>
							<i>+</i>
						</div>
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
					</div>
					<div className="item">
						<div className="heading">
							<span>B&G</span> <span><em>(Cubeworks)</em></span>
							<i>+</i>
						</div>
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
					</div>
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
