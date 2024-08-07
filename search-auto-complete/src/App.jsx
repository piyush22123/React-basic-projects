import { useState, useEffect } from 'react'
import './App.css'
import Suggestions from './Components/Suggestions';

function App() {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);


  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      // if users data is availabe then get the query from users data finding by indexOf() method
      const filteredData = (users && users.length > 0) ?
        users.filter((item) => item.toLowerCase().indexOf(query) > -1)
        : []; // else empty []

      setFilteredUsers(filteredData); // set filtereduser as filtereddata
      setShowDropdown(true); // and open dropdown
    }
    // else dont show dropdown
    else {
      setShowDropdown(false);
    }
  }

  console.log(users, filteredUsers);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/users')
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    }
    catch (error) {
      setLoading(false);
      console.error('Error:', error);
    }
  }


  useEffect(() => {
    fetchUsers();
  }, users);




  return (
    <>
      <div className="main">
        {
          (loading) ? 
            <h1>Data is Loading......</h1> 
          : <input
            type="text"
            name='search-users'
            placeholder='Search Users Here...'
            value={searchParam}
            onChange={handleChange}
            />
        }

        {
          showDropdown && <Suggestions data={filteredUsers} />
        }
      </div>
    </>
  )
}

export default App
