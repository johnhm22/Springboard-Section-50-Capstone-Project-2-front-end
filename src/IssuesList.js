import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
// import UserContext from './userContext';
import EstateApi from './api';
import moment from "moment";


function IssuesList ({updateIssues, issues}) {

    const [isLoading, setIsLoading] = useState(true);

    const {user} = useParams();

    const handleUpdateIssues = (issues) => {
        updateIssues(issues);
    }

    useEffect( () => {
        console.log("useEffect called");
        async function getIssuesByUser(user) {
            let issues = await EstateApi.getIssuesByUser(user);
            console.log("issues ", issues);
            handleUpdateIssues(issues)
            setIsLoading(false);
        }
        getIssuesByUser(user);
        }, [] 
        )

        if (isLoading) {
            return <p>Loading &hellip;</p>;
          }
          
    return(
        <>
        <div className="container mt-5">
            <div className="row justify-content-md-center">
                <div className="col-6">
                <h4>Issues you have raised</h4>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Issue</th>
                    <th>Date raised</th>
                    <th>Status</th>
                    </tr>
                </thead>
                {issues.map(issue => (
                <tbody>
                    <tr>
                    <td><Link to={`/issues/${user}/${issue.id}`}>{issue.title}</Link></td>
                    <td>{moment(issue.created_on).format("ddd Do MMMM")}</td>
                    <td>{issue.status}</td>
                    </tr>
                </tbody>
                ))}
                </table>
                <Link to={`/issues/${user}/add`}><button className="btn btn-info btn-sm float-right">Add</button></Link>
                </div>
        </div>
        </div>
        </>
    )
}

export default IssuesList;