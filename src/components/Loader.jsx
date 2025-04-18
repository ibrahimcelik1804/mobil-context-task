import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../thema/color';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.LAVENDERPURPLE} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,

    

    //
  },
});
