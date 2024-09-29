import { useEffect, useState } from 'react';
import axios from 'axios';
import AddForm from './AddForm'; // Import the add form component
import './Cards.css';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle add form visibility

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

  const handleFormSubmit = async (newEntity) => {
    try {
      const response = await axios.post('https://s55-isha-capstone-offbeat.onrender.com/add', newEntity);
      if (response.status === 201) {
        const createdEntity = response.data; // assuming server returns the created entity
        setData([...data, createdEntity]);
        setShowAddForm(false);
      } else {
        console.error('Failed to add new entity');
      }
    } catch (error) {
      console.error('Error adding new entity:', error);
    }
  };

  return (
    <div className="home-con">
      <button className="add-button" onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Close Form' : 'Add New Entity'}
      </button>

      {showAddForm && <AddForm onFormSubmit={handleFormSubmit} />}

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
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default Home;
