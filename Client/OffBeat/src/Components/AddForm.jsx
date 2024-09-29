import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './AddForm.css';

function AddForm({ onFormSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [childSafe, setChildSafe] = useState(false);
  const [rating, setRating] = useState('');
  const [openHours, setOpenHours] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newEntity = {
      name,
      description,
      location,
      child_safe: childSafe,
      rating: Number(rating),
      open_hours: openHours
    };

    try {
      const response = await axios.post('https://s55-isha-capstone-offbeat.onrender.com/insert', newEntity);
      console.log('Entity added successfully:', response.data);
      onFormSubmit(response.data); // Notify parent component
    } catch (error) {
      console.error('There was an error adding the data:', error);
      setError('Error adding entity. Please try again.');
    }
  };

  return (
    <div className="add-form-container">
      <h2>Add New Entity</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <label>
          Child Safe:
          <input type="checkbox" checked={childSafe} onChange={(e) => setChildSafe(e.target.checked)} />
        </label>
        <label>
          Rating:
          <input type="number" min="0" max="10" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </label>
        <label>
          Open Hours:
          <input type="text" value={openHours} onChange={(e) => setOpenHours(e.target.value)} required />
        </label>
        <button type="submit">Add Entity</button>
      </form>
    </div>
  );
}

// Define prop types for validation
AddForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};

export default AddForm;
