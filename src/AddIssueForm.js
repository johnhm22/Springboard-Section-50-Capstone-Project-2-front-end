import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import EstateApi from './api';

const AddIssueForm = () => {

    const {user} = useParams();
    
    const history = useHistory();

    const initialState = {
        title: "",
        category: "",
        description: ""
    }
    const [formData, setFormData] = useState(initialState);


    // async function addIssue(user, title, category, description, status='open') {
    //     try {
    //         //add in authentication of username and password
    //         console.log("user, title, category, description: ", user, title, category, description);
    //         console.log("addIssue function called");
    //         await axios({
    //           method: 'patch',
    //           url: `http://localhost:3001/issues/${user}/add`,
    //           data: {
    //             username: user,
    //             title,
    //             category,
    //             description,
    //             status                
    //         }
    //       });
    //   } catch(err) {
    //       console.log(err);
    //   }
    // }

    async function addIssue(user, title, category, description) {
        console.log("user in addIssue function addIssueForm ", user);
        console.log("addIssue function called"); //undefined
        try {
            //add in authentication of username and password
            let results = await EstateApi.addIssue(user, title, description, category)
            console.log("results ", results)
            history.push(`/issues/${user}`)
            }
            catch(err) {
          console.log(err);
      }
    }




const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formdata => ({
        ...formdata,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    const {title, category, description} = formData;
    addIssue(user, title, category, description);
    setFormData(initialState);
}


// title, username, status, category, description

return (
    <div className="container">
        <div className="row justify-content-md-center">
            <div className="col-6">
                <form method="get" onSubmit={handleSubmit} className="mt-3">
                    <h4>Add a new issue</h4>

                    <div className="form-group">
                    <label htmlFor="title"></label>
                    <input className="form-control" type="text" name="title" id="title" value={formData.title} onChange={handleChange} placeholder="Title..." />
                    </div>
                    
                    <div className="form-group">
                    <label htmlFor="description"></label>
                    <input className="form-control" type="text" name="description" id="description" value={formData.description} onChange={handleChange} placeholder="Add details..." />
                    </div>

                    <div className="form-group">
                    <label htmlFor="category"></label>
                    <select className="form-control custom-select" type="category" name="category" id="category" value={formData.category} onChange={handleChange}>
                    <option selected>Choose...</option>
                    <option value='1'>Low priority</option>
                    <option value='2'>Medium priority</option>
                    <option value='3'>High priority</option>
                    </select>
                    </div>
                    <button className="btn btn-primary btn-sm float-right">Add</button>
                    <button className="btn btn-danger btn-sm float-right mr-2">Cancel</button>
                </form>
        </div>
        </div>
    </div>
    )
  
};

export default AddIssueForm;