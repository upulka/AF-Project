import React, { Component } from 'react';
import axios from 'axios';
import './uploads.css';
import "bootstrap-icons/font/bootstrap-icons.css";


class Workshop extends Component {
    constructor(){
        super();
        this.state={
            uploads:[],
            message:''   
        }

        this.getPendingWorkshops= this.getPendingWorkshops.bind(this);
    }

    componentDidMount(){
        this.getPendingWorkshops();
    }

    getPendingWorkshops(){

        let status = "pending"
        axios.get('http://localhost:8070/workshopUpload/'+status)
        .then((data)=>{
            this.setState({
                uploads: data.data
            }, ()=>{console.log(this.state.uploads)})
            console.log(data.data)
        })
        .catch(err=>{
            console.error(err);
        });
    }

    updateApproval=(id, approval)=>{
        let workshop = {
            id: id,
            approval: approval
        }

        axios.put('http://localhost:8070/workshopUpload/updateApproval',workshop)
        .then((response)=>{
            this.setState({
                message: response.message
            });
            this.getPendingWorkshops();
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    
    render() {
            return (
                <div className="uploadBackground">
                    <div className="container w-75 p-3 text-center" id="uploads">
                        <h2>Pending Workshop proposals</h2>
                    <div className="container w-75 p-3 ">
                        {this.state.uploads.length != 0 ?  
                        <table className="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                <th scope="col" id ='file'>file</th>
                                <th scope="col" id ='name'>Name</th>
                                <th scope="col" id ='email'>Email</th>
                                <th scope="col" id ='uploadDate'>Upload Date</th>
                                <th scope="col" id ='approve'>Approve</th>
                                <th scope="col" id ='reject'>Reject</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.uploads.map((workshop)=>{
                                    return(
                                        <tr key={workshop._id}>
                                            <th scope="row" id ='trfile'>
                                            <i class="bi bi-file-earmark-pdf"></i>
                                            <a href={`http://localhost:8070/${workshop.filePath}`}>{workshop.title}</a>
                                            </th>
                                            <td id ='trName'>{workshop.user.name}</td>
                                            <td id ='trEmail'>{workshop.user.email}</td>
                                            <td id ='trUploadDate'>{workshop.uploadDate}</td>
                                            <td  id ='trApprove'><button id='btnApprove' type="button" className="btn btn-success" onClick={()=>this.updateApproval(workshop._id, 'approved')}>Approve</button></td>
                                            <td  id ='trRreject'><button id='btnReject' type="button" className="btn btn-danger" onClick={()=>this.updateApproval(workshop._id, 'rejected')}>Reject</button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        // : <img src={Unavailable} />}
                        : <div/>}
                    </div>
                    </div>
                </div>
            );
        
    }
}

export default Workshop;