import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './CardList';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='userlist'>
      <h2>List of users</h2>
      <CardList items={listOfUsers} />
    </div>
  );
};

export default UserList;
