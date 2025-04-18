import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {Colors} from '../thema/color';
import {TaskContext} from '../context/TaskContext';

const Error = () => {
  const {error} = useContext(TaskContext);
  console.log(error, 'rrttr');
  return (
    <View style={styles.container}>
      <Text style={{color: Colors.CORALRED, fontSize: 20, fontWeight: '700'}}>
        {error}
      </Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',

    //
  },
});
