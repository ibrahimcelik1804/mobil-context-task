import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigation/Routes';
import {UsersProvider} from './src/context/UsersContext';
import { TaskProvider } from './src/context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <UsersProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </UsersProvider>
    </TaskProvider>
  );
};

export default App;
