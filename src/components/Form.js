import React, { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({ name: "", address: "", email: "", number: "" });
    const [errData, setErrData] = useState({ name: false, address: false, email: false, number: false });

    function handleSubmit(e) {
        e.preventDefault();

        const errors = {
            name: !/^[a-zA-Z\s]+$/.test(formData.name),
            address: !/^[a-zA-Z0-9\s]+$/.test(formData.address),
            email: !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email),
            number: !/^\d{10}$/.test(formData.number),
        };

        setErrData(errors);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                {errData.name && <div className="errorMessage">Name should contain only letters</div>}
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    required
                />
                {errData.address && <div className="errorMessage">Address should not contain special characters</div>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                {errData.email && <div className="errorMessage">Email should contain @ and .com</div>}
            </div>
            <div>
                <label htmlFor="number">Mobile</label>
                <input
                    type="text"
                    id="number"
                    value={formData.number}
                    onChange={e => setFormData({ ...formData, number: e.target.value })}
                    required
                />
                {errData.number && <div className="errorMessage">Mobile number should not be more than 10 characters</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
