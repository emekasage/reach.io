import React ,{useContext, useState} from 'react'
import {providerFunctions} from "../provider/FunctionsProvider"
import BarChart from "../components/BarChart"

export default function BuyCreditInner() {
	
	const {
        showSideBar,
        setShowModal,
		setModalPage
    } = useContext(providerFunctions)
	
    return (
        <div className={`pagebody ${showSideBar ? "":"expand"}`}>
        
            <div className="container-fluid p-0">
                <div className="d-flex justify-content-between user-val">
                    <div className="heading-col">
                        <h5><strong>Credit</strong></h5>
                    </div>
                </div>
                

                <div className="credit-dtls">
                    <div className="total-credit">
                        <h6>Your total credit</h6>
                        <p>12,340</p>
                    </div>

                    <div className="credit-btn d-flex align-items-center">
                        <button  onClick={()=> {
						setShowModal(true);
						setModalPage("credit-modal"); }}>Buy Credit</button>
                    </div>
                </div>

                <div className="row pro-tab">
                    <div className="col-sm-12">
                        <div className="card credit-chart">
                            <div className="card-body">
                                <div className="chart-props">
                                    <div className="d-flex align-items-center prop-txt">
                                        <i class="bi bi-dot first-dot"></i>
                                        <span>Purchase</span>
                                        <i class="bi bi-dot sec-dot"></i>
                                        <span>Utilization</span>
                                    </div>
                                    <div className="dropdown">
                                        <a className="btn dropdown-toggle prop-drp" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            This Week <i class="bi bi-caret-down-fill"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="">
                                    <BarChart/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heading-col user-val">
                        <h5 style={{paddingTop: "20px"}}><strong>Latest Transactions</strong></h5>
                    </div>

                    <div className="col-sm-12">
                        <div className="card credit-trsc">
                            <div className="card-body">
                                <ul className="nav nav-pills mb-3 crd-tabs" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-dep-tab" data-bs-toggle="pill" data-bs-target="#pills-deposit" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Deposit</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-util-tab" data-bs-toggle="pill" data-bs-target="#pills-utilize" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Utilization</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-deposit" role="tabpanel" aria-labelledby="pills-dep-tab">
                                        <div className="table-responsive">
                                            <table className="table table-hover my-1 crd-table">
                                                <thead>
                                                    <tr>
                                                        <th style={{width: "10%"}}>S/N</th>
                                                        <th style={{width: "10%"}}>Date</th>
                                                        <th style={{width: "70%"}}>Credit</th>
                                                        <th style={{width: "10%"}}>Cost</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-up-right-circle"></i></td>
                                                        <td>Jan 12</td>
                                                        <td>2,470</td>
                                                        <td>$328.85</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-up-right-circle"></i></td>
                                                        <td>Feb 8</td>
                                                        <td>4,875</td>
                                                        <td>$275.43</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-up-right-circle"></i></td>
                                                        <td>Feb 23</td>
                                                        <td>5,466</td>
                                                        <td>$928.41</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-up-right-circle"></i></td>
                                                        <td>Feb 26</td>
                                                        <td>2,096</td>
                                                        <td>$473.81</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-up-right-circle"></i></td>
                                                        <td>Mar 9</td>
                                                        <td>3,679</td>
                                                        <td>$525.52</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-up-right-circle"></i></td>
                                                        <td>Mar 26</td>
                                                        <td>4,688</td>
                                                        <td>$635.32</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-utilize" role="tabpanel" aria-labelledby="pills-util-tab">
                                    <div className="table-responsive">
                                            <table className="table table-hover my-1 crd-table">
                                                <thead>
                                                    <tr>
                                                        <th style={{width: "10%"}}>S/N</th>
                                                        <th style={{width: "10%"}}>Date</th>
                                                        <th style={{width: "70%"}}>Campaign</th>
                                                        <th style={{width: "10%"}}>Credit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-down-left-circle"></i></td>
                                                        <td>Jan 12</td>
                                                        <td>Candidate LinkedIn Engage-</td>
                                                        <td>2,470</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-down-left-circle"></i></td>
                                                        <td>Feb 8</td>
                                                        <td>Candidate LinkedIn Engage-</td>
                                                        <td>4,875</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-down-left-circle"></i></td>
                                                        <td>Feb 23</td>
                                                        <td>Candidate LinkedIn Engage-</td>
                                                        <td>5,466</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-down-left-circle"></i></td>
                                                        <td>Feb 26</td>
                                                        <td>Candidate LinkedIn Engage-</td>
                                                        <td>2,096</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-down-left-circle"></i></td>
                                                        <td>Mar 9</td>
                                                        <td>Candidate LinkedIn Engage-</td>
                                                        <td>3,679</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i class="bi bi-arrow-down-left-circle"></i></td>
                                                        <td>Mar 26</td>
                                                        <td>Candidate LinkedIn Engage-</td>
                                                        <td>4,688</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

        </div>
    )
}
