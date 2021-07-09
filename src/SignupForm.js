import React, { useState } from 'react';
import { useHistory } from 'react-router';



const SignupForm = ({signup}) => {

    const history = useHistory();

    const initialState = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        property: ""
    }
    const [formData, setFormData] = useState(initialState);

//note: this is using ES2015 computed property names
//allowing a generic onChange handler for both inputs
const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formdata => ({
        ...formdata,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    const {username, password, firstname, lastname, email, property} = formData;
    signup(username, password, firstname, lastname, email, property);
    setFormData(initialState);
    history.push('/');
}

return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <form method="get" onSubmit={handleSubmit} className="mt-5">
        <h2>Sign Up</h2>
            <div className="form-group">
            <label htmlFor="username" className="float-left">Username</label>
            <input className="form-control" type="text" name="username" id="username" value={formData.username} onChange={handleChange} placeholder="Enter username..." />
            </div>
            <div className="form-group">
            <label htmlFor="password" className="float-left">Password</label>
            <input className="form-control" type="text" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter password..." />
            </div>
            <div className="form-group">
            <label htmlFor="firstname" className="float-left">First name</label>
            <input className="form-control" type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange} placeholder="Enter first name..." />
            </div>
            <div className="form-group">
            <label htmlFor="lastname" className="float-left">Last name</label>
            <input className="form-control" type="text" name="lastname" id="lastname" value={formData.lastname} onChange={handleChange} placeholder="Enter last name..." />
            </div>
            <div className="form-group">
            <label htmlFor="email" className="float-left">Email address</label>
            <input className="form-control" type="text" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter email..." />
            </div>
            <div className="form-group">
            <label htmlFor="property" className="float-left">Property number</label>
            <input className="form-control" type="text" name="property" id="property" value={formData.property} onChange={handleChange} placeholder="Property number..." />
            </div>
            <button className="btn btn-primary float-right">Sign up</button>
        </form>
       
        </div>
    )
  
};

export default SignupForm;