import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const UsersContext = createContext();

export const UsersProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
 
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  

  return (
    <UsersContext.Provider value={{users, error, loading}}>
      {children}
    </UsersContext.Provider>
  );
};
