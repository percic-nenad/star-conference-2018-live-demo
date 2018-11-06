import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/css/style.css'
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';

import Clients from './pages/Clients'
import Timesheet from './pages/Timesheet';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import TeamMembers from './pages/TeamMembers';

export default class Root extends Component {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
				<>
					<Header />
					<div className="wrapper">
						<section className="content">
						<Switch>
							<Route path="/" exact component={Timesheet} ></Route>
							<Route path="/clients" component={Clients} ></Route>
							<Route path="/projects" component={Projects}></Route>
							<Route path="/reports" component={Reports}></Route>
							<Route path="/team-members" component={TeamMembers}></Route>
						</Switch>
						</section>
					</div>
					<Footer />
				</>
				</BrowserRouter>
			</div>
		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));