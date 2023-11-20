// UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  // State to hold the list of users
  const [listOfUsers, setListOfUsers] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch data from the JSONPlaceholder API
    const fetchData = async () => {
      try {
        // You gone to use jsonplaceholder API to get list of user 
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        // Updating the state with the received user data
        setListOfUsers(response.data);
      } catch (error) {
        // Handling errors in case the API request fails
        console.error('Error fetching data:', error);
      }
    };

    // Calling the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that the useEffect runs only once when the component mounts

  return (
    <div className='list'>
      <h2>List of Users</h2>
      <ul>
        {/* Mapping through the list of users and displaying their names */}
        {listOfUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
