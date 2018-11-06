import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return (
			<nav>
					<ul className="menu">
						<li>
							<NavLink exact to='/' className='btn nav active'>TimeSheet</NavLink>
						</li>
						<li>
							<NavLink to='clients' className='btn nav'>Clients</NavLink>
						</li>
						<li>
							<NavLink to='projects' className='btn nav'>Projects</NavLink>
						</li>
						<li>
							<NavLink to='categories' className='btn nav'>Categories</NavLink>
						</li>
						<li>
							<NavLink to='team-members' className='btn nav'>Team members</NavLink>
						</li>
						<li className='last'>
							<NavLink to='reports' className='btn nav'>Reports</NavLink>
						</li>
					</ul>
					<span className="line"></span>
				</nav>
		)
	}
}
