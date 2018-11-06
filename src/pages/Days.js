import React, { Component } from 'react'

export default class Days extends Component {
	render() {
		return (
			<>
				<h2><i className="ico timesheet"></i>TimeSheet</h2>
				<div className="grey-box-wrap">
					<div className="top">
						<a href="no-path" className="prev"><i></i>previous week</a>
						<span className="center">February 04 - February 10, 2013 (week 6)</span>
						<a href="no-path" className="next">next week<i></i></a>
					</div>
					<div className="bottom">
						<ul className="days">
							<li>
								<a href="no-path">
									<b>Feb 04</b>
									
									<span>monday</span>
								</a>
							</li>
							<li>
								<a href="no-path">
									<b>Feb 06</b>
									<span>tuesday</span>
								</a>
							</li>
							<li>
								<a href="no-path">
									<b>Feb 06</b>
									<span>wednesday</span>
								</a>
							</li>
							<li className="active">
								<a href="no-path">
									<b>Feb 07</b>
									<span>thursday</span>
								</a>
							</li>
							<li>
								<a href="no-path">
									<b>Feb 08</b>
									<span>friday</span>
								</a>
							</li>
							<li>
								<a href="no-path">
									<b>Feb 09</b>
									<span>saturday</span>
								</a>
							</li>
							<li className="last">
								<a href="no-path">
									<b>Feb 10</b>
									<span>sunday</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<table className="default-table">
					<tr>
						<th>
							Client <em>*</em>
						</th>
						<th>
							Project <em>*</em>
						</th>
						<th>
							Category <em>*</em>
						</th>
						<th>Description</th>
						<th className="small">
							Time <em>*</em>
						</th>
						<th className="small">Overtime</th>
					</tr>
					<tr>
						<td>
							<select>
								<option>Choose client</option>
								<option>Client 1</option>
								<option>Client 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose project</option>
								<option>Project 1</option>
								<option>Project 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose category</option>
								<option>Front-End Development</option>
								<option>Design</option>
							</select>
						</td>
						<td>
							<input type="text" className="in-text medium" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
					</tr>
					<tr>
						<td>
							<select>
								<option>Choose client</option>
								<option>Client 1</option>
								<option>Client 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose project</option>
								<option>Project 1</option>
								<option>Project 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose category</option>
								<option>Front-End Development</option>
								<option>Design</option>
							</select>
						</td>
						<td>
							<input type="text" className="in-text medium" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
					</tr>
					<tr>
						<td>
							<select>
								<option>Choose client</option>
								<option>Client 1</option>
								<option>Client 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose project</option>
								<option>Project 1</option>
								<option>Project 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose category</option>
								<option>Front-End Development</option>
								<option>Design</option>
							</select>
						</td>
						<td>
							<input type="text" className="in-text medium" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
					</tr>
					<tr>
						<td>
							<select>
								<option>Choose client</option>
								<option>Client 1</option>
								<option>Client 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose project</option>
								<option>Project 1</option>
								<option>Project 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose category</option>
								<option>Front-End Development</option>
								<option>Design</option>
							</select>
						</td>
						<td>
							<input type="text" className="in-text medium" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
					</tr>
					<tr>
						<td>
							<select>
								<option>Choose client</option>
								<option>Client 1</option>
								<option>Client 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose project</option>
								<option>Project 1</option>
								<option>Project 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose category</option>
								<option>Front-End Development</option>
								<option>Design</option>
							</select>
						</td>
						<td>
							<input type="text" className="in-text medium" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
					</tr>
					<tr>
						<td>
							<select>
								<option>Choose client</option>
								<option>Client 1</option>
								<option>Client 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose project</option>
								<option>Project 1</option>
								<option>Project 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose category</option>
								<option>Front-End Development</option>
								<option>Design</option>
							</select>
						</td>
						<td>
							<input type="text" className="in-text medium" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
					</tr>
					<tr>
						<td>
							<select>
								<option>Choose client</option>
								<option>Client 1</option>
								<option>Client 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose project</option>
								<option>Project 1</option>
								<option>Project 2</option>
							</select>
						</td>
						<td>
							<select>
								<option>Choose category</option>
								<option>Front-End Development</option>
								<option>Design</option>
							</select>
						</td>
						<td>
							<input type="text" className="in-text medium" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
						<td className="small">
							<input type="text" className="in-text xsmall" />
						</td>
					</tr>
				</table>
				<div className="total">
					<a href="index.html"><i></i>back to monthly view</a>
					<span>Total hours: <em>7.5</em></span>
				</div>
			</>
		)
	}
}
