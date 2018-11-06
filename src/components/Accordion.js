import React, { Component } from 'react'

export default class Accordion extends Component {
	constructor(props) {
		super(props)

		this.state = {
			show: false
		}
	}

	toggle = () => {
		this.setState({
			show: !this.state.show
		})
	}

	render() {
		return (
			<div className={`item${this.state.show ? ' open' : ''}`}>
				<div className='heading' onClick={this.toggle} >
					<span>{this.props.title}</span>
					<i>+</i>
				</div>
				<div className='accordion-content'>
					<span>{this.props.children}</span>
				</div>
			</div>	
		)
	}
}
