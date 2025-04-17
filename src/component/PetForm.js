import React, { useState } from 'react';

const PetForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        owner: '',
        species: '',
        sex: '',
        birth: '',
        death: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7057/api/My', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if(data >0){
                console.log('Data posted:', data);
                alert('Data Insert successfull');
                // Reset form data after successful submission
                setFormData({
                    name: '',
                    owner: '',
                    species: '',
                    sex: '',
                    birth: '',
                    death: ''
                });
            }
          
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-4">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Owner:</label>
                    <input type="text" name="owner" value={formData.owner} onChange={handleChange} className="form-control" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                    <label>Species:</label>
                    <input type="text" name="species" value={formData.species} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Sex:</label>
                    <input type="text" name="sex" value={formData.sex} onChange={handleChange} className="form-control" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                    <label>Birth:</label>
                    <input type="date" name="birth" value={formData.birth} onChange={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Death:</label>
                    <input type="date" name="death" value={formData.death} onChange={handleChange} className="form-control" />
                </div>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
};

export default PetForm;
