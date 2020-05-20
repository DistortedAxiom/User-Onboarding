import React, {useState, useEffect} from 'react';
import './App.css';

import UserForm from './components/Form';
import User from './components/User';
import axios from 'axios';

function App() {

  const [user, setUser] = useState([]);
  const [updatedUser, setUpdatedUser] = useState([])


  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUser(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const addUser = u => {
    setUser([...user, u])
  }

  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        {user.map((el, i) => (
          <User user={el} key={i} />
        ))}
        <UserForm addUser={addUser}/>
      </header>
    </div>
  );
}

export default App;
