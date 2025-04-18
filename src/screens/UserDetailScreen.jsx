import {useNavigation, useRoute} from '@react-navigation/native';
import {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {UsersContext} from '../context/UsersContext';
import {Colors} from '../thema/color';
import BackArrow from '../assets/icons/BackArrow';
import SCREENS from '../utils/router';

const UserDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {userId} = route.params;
  const {users} = useContext(UsersContext);

  const foudUser = users.find(user => user.id === userId);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>

        <Text style={styles.headtext}>User Detail</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>{foudUser.name}</Text>
        <Text style={styles.email}>{foudUser.email}</Text>
        <Text style={styles.phone}>{foudUser.phone}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREENS.TASK)}
          style={styles.btn}>
          <Text style={styles.text}> ViewTask</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ICEBLUE,
  },

  card: {
    backgroundColor: Colors.SLATEGRAY,
    marginHorizontal: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    paddingVertical: 15,
    gap: 10,
    shadowColor: Colors.DARKGRAY,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginTop: 20,
  },
  name: {
    color: Colors.SKYBLUE,
    fontSize: 25,
    fontWeight: '800',
  },
  email: {
    color: Colors.ICEBLUE,
    fontSize: 15,
    fontWeight: '800',
  },
  phone: {
    color: Colors.ICEBLUE,
    fontSize: 15,
    fontWeight: '800',
  },
  btn: {
    backgroundColor: Colors.SKYBLUE,
    paddingHorizontal: 15,
    borderRadius: 15,
    paddingVertical: 10,
    width: '55%',
    shadowColor: 'white',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    color: Colors.SLATEGRAY,
    fontSize: 25,
    fontWeight: '800',
  },
  header: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    position: 'relative',
  },
  arrow: {
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    position: 'absolute',
    left: 0,
  },
  headtext: {
    fontSize: 35,
    fontWeight: '900',

    color: Colors.CORALRED,
  },
});
