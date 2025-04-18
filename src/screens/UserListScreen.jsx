import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {UsersContext} from '../context/UsersContext';
import Loader from '../components/Loader';
import {Colors} from '../thema/color';
import CardUser from '../components/CardUser';

const UserListScreen = () => {
  const {loading, error, users} = useContext(UsersContext);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>User List</Text>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text style={styles.errtext}>{error.message}</Text>
      ) : (
        <FlatList
          data={users}
          renderItem={({item,index}) => <CardUser item={item} index={index} />}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ICEBLUE,
  },
  header: {
    fontSize: 35,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.LAVENDERPURPLE,
  },
  errtext: {
    color: Colors.CORALRED,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
