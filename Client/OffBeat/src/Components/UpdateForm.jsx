import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function UpdateForm({ entity, onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    child_safe: false,
    rating: '',
    open_hours: ''
  });

  useEffect(() => {
    if (entity) {
      setFormData({
        name: entity.name,
        description: entity.description,
        location: entity.location,
        child_safe: entity.child_safe,
        rating: entity.rating,
        open_hours: entity.open_hours
      });
    }
  }, [entity]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ ...entity, ...formData });
  };

  return (
    <div className="update-form">
      <h2>Update Entity</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />

        <label>Child Safe:</label>
        <input type="checkbox" name="child_safe" checked={formData.child_safe} onChange={handleChange} />

        <label>Rating:</label>
        <input type="number" name="rating" value={formData.rating} onChange={handleChange} required />

        <label>Open Hours:</label>
        <input type="text" name="open_hours" value={formData.open_hours} onChange={handleChange} required />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

// Define prop types for UpdateForm
UpdateForm.propTypes = {
  entity: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    child_safe: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    open_hours: PropTypes.string.isRequired
  }),
  onFormSubmit: PropTypes.func.isRequired
};

export default UpdateForm;
