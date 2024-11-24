import React, { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({name: "", address: "", email: "", number: ""});
    let [errData, setErrData] = useState({name: "", address: "", email: "", number: ""});

    function handleSubmit(e) {
        e.preventDefault();

        // Temporary object to collect all errors
        const errors = {};

        // Name validation
        if (!(/^[a-zA-Z]+$/).test(formData.name)) {
            errors.name = "Name should contain only letters";
        } else {
            errors.name = "";
        }

        // Address validation
        if (!(/^[a-zA-Z0-9\s]+$/).test(formData.address)) {
            errors.address = "Address should not contain special characters";
        } else {
            errors.address = "";
        }

        // Email validation
        if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(formData.email)) {
            errors.email = "Email should contain @ and .com";
        } else {
            errors.email = "";
        }

        // Mobile number validation
        if (!(/^\d{10}$/).test(formData.number)) {
            errors.number = "Mobile number should not be more than 10 characters";
        } else {
            errors.number = "";
        }

        // Update all errors at once
        setErrData(errors);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={formData.name} onChange={e => {setFormData({...formData, name:e.target.value})}} required />
                <div className="errorMessage">{errData.name}</div>
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" value={formData.address} onChange={e => {setFormData({...formData, address:e.target.value})}} required />
                <div className="errorMessage">{errData.address}</div>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={formData.email} onChange={e => {setFormData({...formData, email:e.target.value})}} required />
                <div className="errorMessage">{errData.email}</div>
            </div>
            <div>
                <label htmlFor="number">Mobile</label>
                <input type="number" id="number" value={formData.number} onChange={e => {setFormData({...formData, number:e.target.value})}} required />
                <div className="errorMessage">{errData.number}</div>
            </div>
            <button>Submit</button>
        </form>
    )
}