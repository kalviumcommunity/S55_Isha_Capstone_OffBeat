import { useEffect, useState } from 'react';
import axios from 'axios';
import AddForm from './AddForm'; // Import the add form component
import UpdateForm from './UpdateForm'; // Import the update form component
import './Cards.css';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle add form visibility
  const [showUpdateForm, setShowUpdateForm] = useState(false); // State to toggle update form visibility
  const [currentEntity, setCurrentEntity] = useState(null); // State to store the entity being updated

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://s55-isha-capstone-offbeat.onrender.com/data');
      console.log('Data fetched successfully:', response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('There was an error fetching the data:', error);
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://s55-isha-capstone-offbeat.onrender.com/delete/${id}`);
      if (response.status === 200) {
        setData(data.filter(item => item._id !== id));
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('There was an error deleting the data:', error);
    }
  };

  const handleFormSubmit = async (newEntity) => {
    try {
      const response = await axios.post('https://s55-isha-capstone-offbeat.onrender.com/add', newEntity);
      if (response.status === 201) {
        const createdEntity = response.data; // Assuming server returns the created entity
        setData([...data, createdEntity]);
        setShowAddForm(false);
      } else {
        console.error('Failed to add new entity');
      }
    } catch (error) {
      console.error('Error adding new entity:', error);
    }
  };

  const handleUpdate = (entity) => {
    setCurrentEntity(entity);
    setShowUpdateForm(true);
  };

  const handleUpdateSubmit = async (updatedEntity) => {
    try {
      const { _id, ...updateData } = updatedEntity; // Exclude _id from the update data
      const response = await axios.put(`https://s55-isha-capstone-offbeat.onrender.com/update/${_id}`, {
        ...updateData,
        rating: Number(updateData.rating) // Convert rating to number if necessary
      });

      if (response.status === 200) {
        setData(data.map(item => (item._id === _id ? updatedEntity : item)));
        setShowUpdateForm(false);
      } else {
        console.error('Update failed');
      }
    } catch (error) {
      console.error('Update failed:', error.response ? error.response.data : error.message);
    }
  };

  const closeUpdateForm = () => setShowUpdateForm(false);

  return (
    <div className="home-con">
      <button className="add-button" onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Close Form' : 'Add New Entity'}
      </button>

      {showAddForm && <AddForm onFormSubmit={handleFormSubmit} />}

      {showUpdateForm && (
        <div className="modal-overlay" onClick={closeUpdateForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <UpdateForm entity={currentEntity} onFormSubmit={handleUpdateSubmit} />
          </div>
        </div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading data: {error.message}</p>
      ) : data.length > 0 ? (
        data.map((item) => (
          <div key={item._id} className="data-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="heading">Location: {item.location}</p>
            <p className="heading">Child Safe: {item.child_safe ? 'Yes' : 'No'}</p>
            <p className="heading">Rating: {item.rating}</p>
            <p className="heading">Open Hours: {item.open_hours}</p>
            <button className="update-button" onClick={() => handleUpdate(item)}>Update</button>
            <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Home;
