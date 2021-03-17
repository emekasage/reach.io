import React, {useContext, useState} from 'react'
import {providerFunctions} from "../provider/FunctionsProvider"
import DateTime from "../components/DateTime"
import {Link} from 'react-router-dom'

export default function UsersInner() {
    const {
        showSideBar
    } = useContext(providerFunctions)
    return (
        <div className={`pagebody ${showSideBar ? "":"expand"}`}>
            <div className="container-fluid p-0">
                <div className="d-flex justify-content-between user-val">
                    <div className="heading-col">
                        <h5><strong>Users</strong></h5>
                    </div>
                    <div className="date-form">
                        <DateTime/>
                    </div>
					
				</div>

                <div className="row">
						<div className="col-12 col-lg-12 col-xxl-9 d-flex user-tab">
							<div className="card flex-fill">
								<div className="card-header table-card-head d-flex justify-content-between">

									<h5 className="card-title mb-0 table-title">Users</h5>
                                    <div className="dashboard-attr">
                                        <div class="input-group input-group-navbar2">
                                            <img src="assets/img/search-1.svg" alt="" width="30" height="50" class="search-icon" />
                                            <input type="text" class="form-control search-field" placeholder="Search by account or account number" aria-label="Search"/>
                                        </div>
                                        <button type="button" className="btn-dashboard">Dashboard list</button>
                                    </div>
								</div>
								<table className="table table-hover my-1 table-responsive">
									<thead>
										<tr>
                                            <th scope="col">S/N</th>
											<th>Name</th>
											<th className="d-none d-xl-table-cell">Email Address</th>
											<th className="d-none d-xl-table-cell">Phone Numbers</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
                                            <td>1</td>
											<td>Cameron Williamson</td>
											<td className="d-none d-xl-table-cell">ronaldrich@gmail.com</td>
											<td className="d-none d-xl-table-cell">(405) 555-0128</td>
											<td>
												<Link to="#" className="table-icons"><i class="bi bi-trash tabic"></i></Link>
												<Link to="#" className="table-icons"><i class="bi bi-slash-circle tabic"></i></Link>
											</td>
										</tr>
										<tr>
                                            <td>2</td>
											<td>Savannah Nguyen</td>
											<td className="d-none d-xl-table-cell">robertfox@gmail.com</td>
											<td className="d-none d-xl-table-cell">(208) 555-0112</td>
											<td>
												<Link to="#" className="table-icons"><i class="bi bi-trash tabic"></i></Link>
												<Link to="#" className="table-icons"><i class="bi bi-slash-circle tabic"></i></Link>
											</td>
										</tr>
										<tr>
                                            <td>3</td>
											<td>Brooklyn Simmons</td>
											<td className="d-none d-xl-table-cell">ronaldrich@gmail.com</td>
											<td className="d-none d-xl-table-cell">(603) 555-0123</td>
											<td>
												<Link to="#" className="table-icons"><i class="bi bi-trash tabic"></i></Link>
												<Link to="#" className="table-icons"><i class="bi bi-slash-circle tabic"></i></Link>
											</td>
										</tr>
										<tr>
                                            <td>4</td>
											<td>Courtney Henry</td>
											<td className="d-none d-xl-table-cell">bassiecooper@gmail.com</td>
											<td className="d-none d-xl-table-cell">(201) 555-0124</td>
											<td>
												<Link to="#" className="table-icons"><i class="bi bi-trash tabic"></i></Link>
												<Link to="#" className="table-icons"><i class="bi bi-slash-circle tabic"></i></Link>
											</td>
										</tr>
										<tr>
                                            <td>5</td>
											<td>Alene McCoy</td>
											<td className="d-none d-xl-table-cell">bassiecooper@gmail.com</td>
											<td className="d-none d-xl-table-cell">(302) 555-0107</td>
											<td>
												<Link to="#" className="table-icons"><i class="bi bi-trash tabic"></i></Link>
												<Link to="#" className="table-icons"><i class="bi bi-slash-circle tabic"></i></Link>
											</td>
										</tr>
										<tr>
                                            <td>6</td>
											<td>Darlene Robertson</td>
											<td className="d-none d-xl-table-cell">robertfox@gmail.com</td>
											<td className="d-none d-xl-table-cell">(671) 555-0110</td>
											<td>
												<Link to="#" className="table-icons"><i class="bi bi-trash tabic"></i></Link>
												<Link to="#" className="table-icons"><i class="bi bi-slash-circle tabic"></i></Link>
											</td>
										</tr>
										<tr>
                                            <td>7</td>
											<td>Robbie Shapiro</td>
											<td className="d-none d-xl-table-cell">robertfox@gmail.com</td>
											<td className="d-none d-xl-table-cell">(671) 555-0110</td>
											<td>
												<Link to="#" className="table-icons"><i class="bi bi-trash tabic"></i></Link>
												<Link to="#" className="table-icons"><i class="bi bi-slash-circle tabic"></i></Link>
											</td>
										</tr>
                                        <tr>
                                            <td>8</td>
											<td>Alene McCoy</td>
											<td className="d-none d-xl-table-cell">bassiecooper@gmail.com</td>
											<td className="d-none d-xl-table-cell">(302) 555-0107</td>
											<td>
												<Link to="#" className="table-icons"><i class="bi bi-trash tabic"></i></Link>
												<Link to="#" className="table-icons"><i class="bi bi-slash-circle tabic"></i></Link>
											</td>
										</tr>
                                        <tr>
                                            <td>9</td>
											<td>Brooklyn Simmons</td>
											<td className="d-none d-xl-table-cell">ronaldrich@gmail.com</td>
											<td className="d-none d-xl-table-cell">(603) 555-0123</td>
											<td>
												<Link to="#" className="table-icons"><i class="bi bi-trash tabic"></i></Link>
												<Link to="#" className="table-icons"><i class="bi bi-slash-circle tabic"></i></Link>
											</td>
										</tr>
										<tr>
                                            <td>10</td>
											<td>James McAvoy</td>
											<td className="d-none d-xl-table-cell">jmcavoy@gmail.com</td>
											<td className="d-none d-xl-table-cell">(405) 555-0128</td>
											<td>
												<Link to="#" className="table-icons"><i class="bi bi-trash tabic"></i></Link>
												<Link to="#" className="table-icons"><i class="bi bi-slash-circle tabic"></i></Link>
											</td>
										</tr>
									</tbody>         
								</table>
								<div className="d-flex justify-content-between table-feat">
									<a href="#" className="view-more-link">View all</a>
									<nav aria-label="Page navigation example">
										<ul class="pagination">
											<li class="page-item"><a class="page-link" href="#">Prev</a></li>
											<li class="page-item"><a class="page-link" href="#">1</a></li>
											<li class="page-item"><a class="page-link" href="#">2</a></li>
											<li class="page-item"><a class="page-link" href="#">3</a></li>
											<li class="page-item"><a class="page-link" href="#">Next</a></li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						
					</div>
            </div>
        </div>
    )
}
