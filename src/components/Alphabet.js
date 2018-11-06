import React, { Component } from 'react'

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export default class Alphabet extends Component {
	constructor(props){
		super(props)

		this.state = {
			activeLetter: ''
		}
	}

	render() {
		return (
			<div className="alpha">
				<ul>
				{
					ALPHABET.map((letter, index) => {
						let itemClasses = this.getActiveClass(letter)+this.getLastClass(index);
						return (
							<li key={index} className={itemClasses}>
								<a href="test" onClick={(event) => this.selectLetter(event, letter)}>{letter}</a>
							</li>
						)
					})
				}
				</ul>
			</div>
		)
	}
	
	selectLetter = (event, letter) => {
		event.preventDefault();
		this.setState({
			activeLetter: letter
		})
	}

	getActiveClass = (letter) => {
		return this.state.activeLetter === letter ? 'active' : ''
	}

	getLastClass = (index) => {
		return ALPHABET.length === index+1 ? 'last' : ''
	}
}
