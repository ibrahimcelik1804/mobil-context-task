import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTextTitle, setNewTextTitle] = useState({});

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setTasks(res.data.slice(0,20));
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);
  const removeTask = id => {
    const filtered = tasks.filter(task => task.id !== id);
    setTasks(filtered);
  };

  const addTask = title => {
    const newTask = {
      userId: 1,
      id: tasks.length + 1,
      title,
    };
    setTasks([...tasks, newTask]);
    setNewTextTitle('');
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        removeTask,
        addTask,
        newTextTitle,
        setNewTextTitle,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
