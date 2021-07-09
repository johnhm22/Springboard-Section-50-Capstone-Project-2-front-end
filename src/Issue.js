import { useParams } from 'react-router-dom';
import React from "react";
import IssueHistory from './IssueHistory';
import moment from "moment";




// import UserContext from './userContext';


function Issue ({issues}) {

    const {id} = useParams();


    const issueDetail = issues.filter(issue => issue.id === parseInt(id));
    console.log("issueDetail: ", issueDetail);

   


    return(
        <>
        <div className="container mt-5">
            <div className="row justify-content-md-center">
                <div className="col-8">
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Issue</th>
                    <th>Date raised</th>
                    <th>Status</th>
                    <th>Category</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{issueDetail[0].title}</td>
                    <td>{moment(issueDetail[0].created_on).format("ddd Do MMMM")}</td>
                    <td>{issueDetail[0].status}</td>
                    <td>{issueDetail[0].category}</td>
                    <td>{issueDetail[0].description}</td>
                    </tr>
                </tbody>
                </table>
                </div>
                <IssueHistory />
            </div>
        </div>
        </>
    )
}

export default Issue;