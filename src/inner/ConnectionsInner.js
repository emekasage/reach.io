import React, {useContext, useState, useEffect} from 'react'
import {providerFunctions} from "../provider/FunctionsProvider"
import DateTime from "../components/DateTime"

export default function ConnectionsInner() {
    const {
        showSideBar
    } = useContext(providerFunctions)

	const [clientsData, setClientsData] = useState([
		{id:1,name:"Cameron Williamson", phone:"(405) 555-0128", email:"camwilliamson@gmail.com", connectedstatus: "Yes", connectedon: "Jan 12th, 2021"},
		{id:2,name:"Emeka Matthews", phone:"(208) 555-0112", email:"emex.exmattews@mail.com", connectedstatus: "Yes", connectedon: "Jan 12th, 2021"},
		{id:4,name:"Ronald Richard", phone:"(603) 555-0123", email:"ronaldrich@gmail.com", connectedstatus: "No", connectedon: "-"},
		{id:5,name:"Alexandra Mahomes", phone:"+234776060763", email:"alexmahomes@mail.com", connectedstatus: "Yes", connectedon: "Jan 12th, 2021"},
		{id:6,name:"Bassie Cooper", phone:"(201) 555-0124", email:"bassiecooper@gmail.com", connectedstatus: "No", connectedon: "-"},
		{id:7,name:"Alexandra Mattews", phone:"+234776060763", email:"alexmattews@mail.com", connectedstatus: "Yes", connectedon: "Jan 12th, 2021"},
		{id:8,name:"Arlene McCoy", phone:"(208) 555-0112", email:"alrenmccyo@mail.com", connectedstatus: "Yes", connectedon: "Jan 12th, 2021"},
		{id:9,name:"Alexandra Mattews", phone:"+234776060763", email:"alexmattews@mail.com", connectedstatus: "No", connectedon: "-"},
		{id:4,name:"Dwayne Carter", phone:"+234776060763", email:"youngmoney@mail.com", connectedstatus: "No", connectedon: "-"},
		{id:5,name:"Alexandra Mattews", phone:"+234776060763", email:"alexmattews@mail.com", connectedstatus: "Yes", connectedon: "Jan 18th, 2021"},
		{id:6,name:"Aubrey Graham", phone:"(671) 555-0110", email:"cert.luv@ovo.com", connectedstatus: "Yes", connectedon: "Feb 10th, 2021"},
		{id:7,name:"Alexandra Mattews", phone:"+234776060763", email:"alexmattews@mail.com", connectedstatus: "Yes", connectedon: "Feb 13th, 2021"},
		{id:8,name:"Alexandra Mattews", phone:"+234776060763", email:"alexmattews@mail.com", connectedstatus: "Yes", connectedon: "Feb 22nd, 2021"},
		{id:9,name:"Beyonce Knowles", phone:"(405) 555-0128", email:"beyhiveforlife@mail.com", connectedstatus: "No", connectedon: "-"},
		{id:1,name:"Alexandra Mattews", phone:"+234776060763", email:"alexmattews@mail.com", connectedstatus: "Yes", connectedon: "Mar 3rd, 2021"},
		{id:2,name:"Emeka Mattews", phone:"(671) 555-0110", email:"alexmattews@mail.com", connectedstatus: "No", connectedon: "-"},
		{id:3,name:"Alexandra Mattews", phone:"+234776060763", email:"alexmattews@mail.com", connectedstatus: "No", connectedon: "-"},
		{id:4,name:"Michael Carter", phone:"+234776060763", email:"rocnation.carter@mail.com", connectedstatus: "No", connectedon: "-"},
		{id:5,name:"Alexancddra Mattyttyews", phone:"+234776060763", email:"alexmattews@mail.com", connectedstatus: "Yes", connectedon: "Mar 5th, 2021"},
		{id:6,name:"Alexandra Mattews", phone:"(201) 555-0124", email:"alexmattews@mail.com", connectedstatus: "Yes", connectedon: "Mar 9th, 2021"},
		{id:7,name:"Hafis Raji", phone:"(671) 555-0110", email:"hafis@esoftresponse.com", connectedstatus: "No", connectedon: "-"},
		{id:8,name:"Brooklyn Simmons", phone:"(405) 555-0128", email:"brooks4sims@mail.com", connectedstatus: "Yes", connectedon: "Mar 12th, 2021"},
		{id:9,name:"Alexandra Mattews", phone:"+234776060763", email:"alexmattews@mail.com", connectedstatus: "Yes", connectedon: "Mar 12th, 2021"},
		{id:4,name:"Peter Olowe", phone:"(208) 555-0112", email:"peterolowe@sodigify.com", connectedstatus: "Yes", connectedon: "Mar 15th, 2021"},
		{id:5,name:"Sean John", phone:"+234776060763", email:"pdiddy4real@mail.com", connectedstatus: "Yes", connectedon: "Mar 25th, 2021"},
		{id:6,name:"Alexandra Mattews", phone:"(671) 555-0110", email:"alexmattews@mail.com", connectedstatus: "Yes", connectedon: "Mar 25th, 2021"},
		{id:7,name:"Ayo Balogun", phone:"+234776060763", email:"wizkidayo@starboy.com", connectedstatus: "Yes", connectedon: "Mar 25th, 2021"},
		{id:8,name:"Alexandra Mattews", phone:"(201) 555-0124", email:"alexmattews@mail.com", connectedstatus: "No", connectedon: "-"},
		{id:9,name:"Darlene Robertson", phone:"+234776060763", email:"robertfox@gmail.com", connectedstatus: "Yes", connectedon: "Mar 27th, 2021"}
	])

	const [paginatedClients, setpaginatedClients] = useState([]);
	const [clientsToDisplay, setClientsToDisplay] = useState([]);
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const [pageCount, setPageCount] = useState(0);
	const [numberOfClient, setNumberOfClient] = useState(0);
	const [viewAll, setViewAll] = useState(false);

	useEffect(() => {
		getpaginatedClients(page);
	}, [page]);

	useEffect(() => {
		if(viewAll){
			setClientsToDisplay(clientsData)
		}else{
			setClientsToDisplay(paginatedClients);
		}
	}, [viewAll, clientsData, paginatedClients]);

	const getpaginatedClients = (page) =>{
		var no_of_clients = clientsData.length;
		setNumberOfClient(no_of_clients);
		setPageCount(Math.ceil(Number(no_of_clients)/Number(perPage)));
		var cc = clientsData.filter((thisdata, index)=>{
			var pageFirst = ((page - 1) * perPage);
			var lastItem = (page * perPage) - 1;
			if(index >= pageFirst && index <= lastItem){
				return true;
			}else{
				return false
			}
		});
		setpaginatedClients(cc)
	}


	const showPaginationList = props => {
		let arr = Array.apply(null, {length: pageCount}).map(Number.call, Number);
		return (    
			<ul className="pgntr">
				<li class="page-item page-link" onClick={()=>page !== 1 ? setPage(page-1): ""} >Prev</li>
				{arr.map(item => {
					return <li class={`page-item  page-link ${page === item+1 ? "active": ""}`} onClick={()=>setPage(item+1)}>{item+1}</li> 
				})}
				<li class="page-item page-link" onClick={()=>page !== pageCount ? setPage(page+1): ""} >Next</li>
			</ul>
		)
	}

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
						<div className="col-12 col-lg-12 col-xxl-12 d-flex user-tab">
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
										{clientsToDisplay.map((thisClientData, index)=>{
											return(
										<tr>
                                            <td>{!viewAll ? ((page - 1) * perPage)+(index + 1): index + 1}</td>
											<td>{thisClientData.name}</td>
											<td className="d-none d-xl-table-cell">{thisClientData.email}</td>
											<td className="d-none d-xl-table-cell">{thisClientData.phone}</td>
											<td><span>{thisClientData.connectedstatus}</span></td>
											<td className="d-none d-md-table-cell">{thisClientData.connectedon}</td>
										</tr>

										)})}
									</tbody>
                                    
								</table>
                                <div className="d-flex justify-content-between table-feat">
									<div className="view-more-link" onClick={()=>setViewAll(!viewAll)}> {!viewAll ? "View all" :"Show Less"} </div>
									<nav aria-label="Page navigation example">
									{ viewAll ? "" : showPaginationList()}
									</nav>
								</div>
							</div>
						</div>
						
					</div>
            </div>
        </div>
    )
}
