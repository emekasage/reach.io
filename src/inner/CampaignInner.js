import React, {useContext, useState, useEffect} from 'react'
import {providerFunctions} from "../provider/FunctionsProvider"
import DateTime from "../components/DateTime"

export default function CampaignInner() {
    const {
        showSideBar,
        setShowModal,
		setModalPage,
        campaign,
        userCampaign
    } = useContext(providerFunctions)

    useEffect(()=>{
        userCampaign();
    },[]);

    useEffect(()=>{
        console.log(campaign.campaign)
    },[campaign]);
   
    return (
        <div className={`pagebody ${showSideBar ? "":"expand"}`}>
            <div className="container-fluid p-0">
                <div className="d-flex justify-content-between user-val">
                    <div className="heading-col">
                        <h5><strong>Campaign</strong></h5>
                    </div>
                    <div className="date-form">
                        <DateTime/>
                    </div>
					
				</div>

                <div className="camp-img">
                    <div className="group-img-txt">
                        <img src="assets/img/Group-camp-1.png"/>
                        <div className="camp-img-txt">
                            <p>Submit your desired campain</p>
                            <h4>Start the process now</h4>
                        </div>
                    </div>
                    <div className="camp-img-btn d-flex align-items-center">
                        <button type="button" className="btn-dashboard" onClick={()=> {
						setShowModal(true);
						setModalPage("campaign-modal"); }}>Submit a Campaign</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-12 col-xxl-9 d-flex user-tab">
                        <div className="card flex-fill">
                            <div className="card-header table-card-head d-flex justify-content-between">

                                <h5 className="card-title mb-0 table-title">Campaign history</h5>
                                
                            </div>
                            <table className="table table-hover my-1">
                                <thead>
                                    <tr>
                                        <th scope="col">S/N</th>
                                        <th>Name of Campaign</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sales Itemization</td>
                                        <td>2020-11-05</td>
                                        <td><button type="button" class="btn btn-success camp-form-btn">Submitted</button></td>	
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Weekly Sales</td>
                                        <td>2020-09-29</td>
                                        <td><button type="button" class="btn btn-danger camp-form-btn">Declined</button></td>	
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Monthly Sales</td>
                                        <td>2020-08-15</td>
                                        <td><button type="button" class="btn btn-secondary camp-form-btn">Pending</button></td>	
                                    </tr>
                                    
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                    
                </div>
            
            </div>
        </div>
        
    )

}

  
