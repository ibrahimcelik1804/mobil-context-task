import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BackArrow from '../assets/icons/BackArrow';
import {Colors} from '../thema/color';
import Error from '../components/Error';
import SCREENS from '../utils/router';
import {useNavigation} from '@react-navigation/native';
import {TaskContext} from '../context/TaskContext';
import {useContext, useState} from 'react';
import Loader from '../components/Loader';

const TaskScreen = () => {
  const {
    tasks,
    loading,
    error,
    removeTask,
    addTask,
    newTextTitle,
    setNewTextTitle,
  } = useContext(TaskContext);
  const navigation = useNavigation();
  const [newTask, setNewTask] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.navigate(SCREENS.USERDETAIL)}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.headtext}>Task</Text>
      </View>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.taskCard}>
              <Text style={styles.text}>
                {item.title.length > 30
                  ? item.title.slice(0, 30) + ' ...'
                  : item.title}
              </Text>
              <TouchableOpacity onPress={() => removeTask(item.id)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <View style={styles.inputcont}>
        <TextInput
          value={newTextTitle}
          onChangeText={setNewTextTitle}
          style={styles.input}
          placeholder="New task"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity
          onPress={() => addTask(newTextTitle)}
          style={styles.inputbtn}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ICEBLUE,
  },
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },
  arrow: {
    position: 'absolute',
    left: 20,
  },
  headtext: {
    fontSize: 32,
    fontWeight: '900',
    color: Colors.CORALRED,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  taskCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 20,
    marginVertical: 8,
    backgroundColor: Colors.DARKGRAY,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    color: Colors.ICEBLUE,
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
  },

  inputcont: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.ICEBLUE,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginRight: 10,
    color: Colors.DARKGRAY,
    fontSize: 18,
    fontWeight: '600',
  },
  inputbtn: {
    backgroundColor: Colors.SKYBLUE,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  removeText: {
    color: Colors.CORALRED,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
  },
});
