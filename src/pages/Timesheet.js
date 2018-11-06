import React, { Component } from 'react'

export default class Timesheet extends Component {
	render() {
		return (
			<>
			<h2><i class="ico timesheet"></i>TimeSheet</h2>
				<div class="grey-box-wrap">
					<div class="top">
						<a href="previous" class="prev"><i></i>previous month</a>
						<span class="center">February, 2013</span>
						<a href="next" class="next">next month<i></i></a>
					</div>
					<div class="bottom">
						
					</div>
				</div>
				<table class="month-table">
					<tr class="head">
						<th><span>monday</span></th>
						<th>tuesday</th>
						<th>wednesday</th>
						<th>thursday</th>
						<th>friday</th>
						<th>saturday</th>
						<th>sunday</th>
					</tr>
					<tr class="mobile-head">
						<th>mon</th>
						<th>tue</th>
						<th>wed</th>
						<th>thu</th>
						<th>fri</th>
						<th>sat</th>
						<th>sun</th>
					</tr>
					<tr>
						<td class="positive previous">
							<div class="date">
								<span>28.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive previous">
							<div class="date">
								<span>29.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive previous">
							<div class="date">
								<span>30.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive previous">
							<div class="date">
								<span>31.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive">
							<div class="date">
								<span>1.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td>
							<div class="date">
								<span>2.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td>
							<div class="date">
								<span>3.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
					</tr>
					<tr>
						<td class="positive">
							<div class="date">
								<span>4.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive">
							<div class="date">
								<span>5.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive">
							<div class="date">
								<span>6.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive">
							<div class="date">
								<span>7.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive">
							<div class="date">
								<span>8.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td>
							<div class="date">
								<span>9.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td>
							<div class="date">
								<span>10.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
					</tr>
					<tr>
						<td class="positive">
							<div class="date">
								<span>11.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive">
							<div class="date">
								<span>12.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive">
							<div class="date">
								<span>13.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive">
							<div class="date">
								<span>14.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td class="positive">
							<div class="date">
								<span>15.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td>
							<div class="date">
								<span>16.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td>
							<div class="date">
								<span>17.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
					</tr>
					<tr>
						<td class="negative">
							<div class="date">
								<span>18.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>4</span>
								</a>
							</div>
						</td>
						<td>
							<div class="date">
								<span>19.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td class="positive">
							<div class="date">
								<span>20.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>7.5</span>
								</a>
							</div>
						</td>
						<td>
							<div class="date">
								<span>21.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td class="disable">
							<div class="date">
								<span>22.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td class="disable">
							<div class="date">
								<span>23.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td class="disable">
							<div class="date">
								<span>24.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
					</tr>
					<tr>
						<td class="disable">
							<div class="date">
								<span>25.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td class="disable">
							<div class="date">
								<span>26.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td class="disable">
							<div class="date">
								<span>27.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td class="disable">
							<div class="date">
								<span>28.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td class="disable">
							<div class="date">
								<span>1.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td class="disable">
							<div class="date">
								<span>2.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
						<td class="disable">
							<div class="date">
								<span>3.</span>
							</div>
							<div class="hours">
								<a href="days.html">
									Hours: <span>0</span>
								</a>
							</div>
						</td>
					</tr>
				</table>
				<div class="total">
					<span>Total hours: <em>90</em></span>
				</div>
				</>
		)
	}
}
