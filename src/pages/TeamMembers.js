import React, { Component } from 'react'

export default class TeamMembers extends Component {
	render() {
		return (
			<>
				<h2><i className="ico team-member"></i>Team members</h2>
				<div className="grey-box-wrap reports ico-member">
					<a href="#new-member" className="link new-member-popup test">
						<span>Create new member</span>
					</a>
				</div>
				<div className="new-member-wrap">
					<div id="new-member" className="new-member-inner">
						<h2>Create new team member</h2>
						<ul className="form">
							<li>
								<label>Name:</label>
								<input type="text" className="in-text" />
							</li>								
							<li>
								<label>Hours per week:</label>
								<input type="text" className="in-text" />
							</li>
							<li>
								<label>Username:</label>
								<input type="text" className="in-text" />
							</li>
							<li>
								<label>Email:</label>
								<input type="text" className="in-text" />
							</li>
							<li className="inline">
								<label>Status:</label>
								<span className="radio">
									<label for="inactive">Inactive:</label>
									<input type="radio" value="1" name="status" id="inactive" />
								</span>
								<span className="radio">
									<label for="active">Active:</label>
									<input type="radio" value="2" name="status" id="active" />
								</span>
							</li>
							<li className="inline">
								<label>Role:</label>
								<span className="radio">
									<label for="admin">Admin:</label>
									<input type="radio" value="1" name="status" id="admin" />
								</span>
								<span className="radio">
									<label for="worker">Worker:</label>
									<input type="radio" value="2" name="status" id="worker" />
								</span>
							</li>
						</ul>
						<div className="buttons">
							<div className="inner">
								<a href="no-path" className="btn green">Invite team member</a>
							</div>
						</div>
					</div>
				</div>
				<div className="accordion-wrap">
					<div className="item">
						<div className="heading">
							<span>Sladjana Miljanovic</span>
							<i>+</i>
						</div>
						<div className="details">
							<ul className="form">
								<li>
									<label>Name:</label>
									<input type="text" className="in-text" />
								</li>								
								<li>
									<label>Hours per week:</label>
									<input type="text" className="in-text" />
								</li>
							</ul>
							<ul className="form">
								<li>
									<label>Username:</label>
									<input type="text" className="in-text" />
								</li>
								<li>
									<label>Email:</label>
									<input type="text" className="in-text" />
								</li>								
							</ul>
							<ul className="form last">
								<li>
									<label>Status:</label>
									<span className="radio">
										<label for="inactive">Inactive:</label>
										<input type="radio" value="1" name="status" id="inactive" />
									</span>
									<span className="radio">
										<label for="active">Active:</label>
										<input type="radio" value="2" name="status" id="active" />
									</span>
								</li>
								<li>
									<label>Role:</label>
									<span className="radio">
										<label for="admin">Admin:</label>
										<input type="radio" value="1" name="status" id="admin" />
									</span>
									<span className="radio">
										<label for="worker">Worker:</label>
										<input type="radio" value="2" name="status" id="worker" />
									</span>
								</li>
							</ul>
							<div className="buttons">
								<div className="inner">
									<a href="no-path" className="btn green">Save</a>
									<a href="no-path" className="btn red">Delete</a>
									<a href="no-path" className="btn orange">Reset Password</a>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="heading">
							<span>Sladjana Miljanovic</span>
							<i>+</i>
						</div>
						<div className="details">
							<ul className="form">
								<li>
									<label>Name:</label>
									<input type="text" className="in-text" />
								</li>								
								<li>
									<label>Hours per week:</label>
									<input type="text" className="in-text" />
								</li>
							</ul>
							<ul className="form">
								<li>
									<label>Username:</label>
									<input type="text" className="in-text" />
								</li>
								<li>
									<label>Email:</label>
									<input type="text" className="in-text" />
								</li>								
							</ul>
							<ul className="form last">
								<li>
									<label>Status:</label>
									<span className="radio">
										<label for="inactive">Inactive:</label>
										<input type="radio" value="1" name="status" id="inactive" />
									</span>
									<span className="radio">
										<label for="active">Active:</label>
										<input type="radio" value="2" name="status" id="active" />
									</span>
								</li>
								<li>
									<label>Role:</label>
									<span className="radio">
										<label for="admin">Admin:</label>
										<input type="radio" value="1" name="status" id="admin" />
									</span>
									<span className="radio">
										<label for="worker">Worker:</label>
										<input type="radio" value="2" name="status" id="worker" />
									</span>
								</li>
							</ul>
							<div className="buttons">
								<div className="inner">
									<a href="no-path" className="btn orange">Save</a>
									<a href="no-path" className="btn orange">Delete</a>
									<a href="no-path" className="btn orange">Reset Password</a>
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
