import React, { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        number: "",
    });
    const [errData, setErrData] = useState({
        name: "",
        address: "",
        email: "",
        number: "",
    });

    function validateForm(data) {
        const errors = {
            name: /^[a-zA-Z]+$/.test(data.name)
                ? ""
                : "Name should contain only letters",
            address: /^[a-zA-Z0-9\s]+$/.test(data.address)
                ? ""
                : "Address should not contain special characters",
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)
                ? ""
                : "Email should contain @ and .com",
            number: /^\d{10}$/.test(data.number)
                ? ""
                : "Mobile number should not be more than 10 characters",
        };
        console.log("Validation Errors:", errors);
        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const errors = validateForm(formData);
        setErrData(errors); // Update error state
        console.log("Updated errData:", errData);

        if (Object.values(errors).some((err) => err)) {
            // Prevent form submission if there are errors
            return;
        }

        console.log("Form submitted successfully!", formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
                <div className="errorMessage">{errData.name || ""}</div>
            </div>

            <div>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                    }
                />
                <div className="errorMessage">{errData.address || ""}</div>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
                <div className="errorMessage">{errData.email || ""}</div>
            </div>

            <div>
                <label htmlFor="number">Mobile</label>
                <input
                    type="number"
                    id="number"
                    value={formData.number}
                    onChange={(e) =>
                        setFormData({ ...formData, number: e.target.value })
                    }
                />
                <div className="errorMessage">{errData.number || ""}</div>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}
