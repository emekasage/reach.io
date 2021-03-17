import React, {useContext, useState} from 'react'
import {providerFunctions} from "../provider/FunctionsProvider"
import DateTime from "../components/DateTime"

export default function UsersInner() {
    const {
        showSideBar
    } = useContext(providerFunctions)
    return (
        <div className={`pagebody ${showSideBar ? "":"expand"}`}>
            <div className="container-fluid p-0">
                <div className="d-flex justify-content-between user-val">
                    <div className="heading-col">
                        <h5><strong>Connections</strong></h5>
                    </div>
                    <div className="date-form">
                        <DateTime/>
                    </div>
					
				</div>

                <div className="row">
						<div className="col-12 col-lg-12 col-xxl-9 d-flex user-tab">
							<div className="card flex-fill">
								<div className="card-header table-card-head d-flex justify-content-between">

									<h5 className="card-title mb-0 table-title">Connections</h5>
                                    <div className="dashboard-attr">
                                        <div class="input-group input-group-navbar">
                                            <img src="assets/img/search-1.svg" alt="" width="30" height="50" class="form-icon" />
                                            <input type="text" class="form-control header-form" placeholder="Search..." aria-label="Search"/>
                                        </div>
                                        <button type="button" className="btn-dashboard">Dashboard list</button>
                                    </div>
								</div>
								<table className="table table-hover my-1">
									<thead>
										<tr>
                                            <th scope="col">S/N</th>
											<th>Name</th>
											<th className="d-none d-xl-table-cell">Email Address</th>
											<th className="d-none d-xl-table-cell">Phone Numbers</th>
											<th>Connected Status</th>
											<th className="d-none d-md-table-cell">Connected on</th>
										</tr>
									</thead>
									<tbody>
										<tr>
                                            <td>1</td>
											<td>Cameron Williamson</td>
											<td className="d-none d-xl-table-cell">ronaldrich@gmail.com</td>
											<td className="d-none d-xl-table-cell">(405) 555-0128</td>
											<td><span className="badge bg-success">Yes</span></td>
											<td className="d-none d-md-table-cell">Jan 12th, 2021</td>
										</tr>
										<tr>
                                            <td>2</td>
											<td>Savannah Nguyen</td>
											<td className="d-none d-xl-table-cell">robertfox@gmail.com</td>
											<td className="d-none d-xl-table-cell">(208) 555-0112</td>
											<td><span className="badge bg-success">Yes</span></td>
											<td className="d-none d-md-table-cell">Jan 12th, 2021</td>
										</tr>
										<tr>
                                            <td>3</td>
											<td>Brooklyn Simmons</td>
											<td className="d-none d-xl-table-cell">ronaldrich@gmail.com</td>
											<td className="d-none d-xl-table-cell">(603) 555-0123</td>
											<td><span className="badge bg-danger">No</span></td>
											<td className="d-none d-md-table-cell">-</td>
										</tr>
										<tr>
                                            <td>4</td>
											<td>Courtney Henry</td>
											<td className="d-none d-xl-table-cell">bassiecooper@gmail.com</td>
											<td className="d-none d-xl-table-cell">(201) 555-0124</td>
											<td><span className="badge bg-success">Yes</span></td>
											<td className="d-none d-md-table-cell">Jan 12th, 2021</td>
										</tr>
										<tr>
                                            <td>5</td>
											<td>Alene McCoy</td>
											<td className="d-none d-xl-table-cell">bassiecooper@gmail.com</td>
											<td className="d-none d-xl-table-cell">(302) 555-0107</td>
											<td><span className="badge bg-danger">No</span></td>
											<td className="d-none d-md-table-cell">-</td>
										</tr>
										<tr>
                                            <td>6</td>
											<td>Darlene Robertson</td>
											<td className="d-none d-xl-table-cell">robertfox@gmail.com</td>
											<td className="d-none d-xl-table-cell">(671) 555-0110</td>
											<td><span className="badge bg-success">Yes</span></td>
											<td className="d-none d-md-table-cell">Jan 12th, 2021</td>
										</tr>
										<tr>
                                            <td>7</td>
											<td>Robbie Shapiro</td>
											<td className="d-none d-xl-table-cell">robertfox@gmail.com</td>
											<td className="d-none d-xl-table-cell">(671) 555-0110</td>
											<td><span className="badge bg-success">Yes</span></td>
											<td className="d-none d-md-table-cell">Jan 12th, 2021</td>
										</tr>
                                        <tr>
                                            <td>8</td>
											<td>Alene McCoy</td>
											<td className="d-none d-xl-table-cell">bassiecooper@gmail.com</td>
											<td className="d-none d-xl-table-cell">(302) 555-0107</td>
											<td><span className="badge bg-danger">No</span></td>
											<td className="d-none d-md-table-cell">-</td>
										</tr>
                                        <tr>
                                            <td>9</td>
											<td>Brooklyn Simmons</td>
											<td className="d-none d-xl-table-cell">ronaldrich@gmail.com</td>
											<td className="d-none d-xl-table-cell">(603) 555-0123</td>
											<td><span className="badge bg-danger">No</span></td>
											<td className="d-none d-md-table-cell">-</td>
										</tr>
										<tr>
                                            <td>10</td>
											<td>Project Wombat</td>
											<td className="d-none d-xl-table-cell">prwombat@gmail.com</td>
											<td className="d-none d-xl-table-cell">(405) 555-0128</td>
											<td><span className="badge bg-warning">In progress</span></td>
											<td className="d-none d-md-table-cell">-</td>
										</tr>
									</tbody>
                                    
								</table>
                                <div className="view-more d-flex justify-content-center">
                                    <button type="button" className="btn-dashboard-2">View more</button>
                                </div>
							</div>
						</div>
						
					</div>
            </div>
        </div>
    )
}
