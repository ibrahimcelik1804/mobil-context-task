import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';


import {ColorArray, Colors} from '../thema/color';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../utils/router';

const CardUser = ({item}) => {
  const navigation = useNavigation();
  const backgroundColors = ColorArray[item.id % ColorArray.length];

  const getInitials = names => {
    if (!names) return '';
    const updateNames = names.trim().split(' ');
    const firstInitial = updateNames[0]?.[0]?.toUpperCase() || ' ';
    const LastInitial = updateNames[1]?.[0].toUpperCase() || ' ';
    return firstInitial + LastInitial;
  };
  const initials = getInitials(item.name);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.USERDETAIL,{userId:item.id})}
        style={{
          gap: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
        <View>
          <Text style={styles.text1}>{item.name}</Text>
          <Text style={styles.text2}>{item.email}</Text>
          <Text style={styles.text3}>{item.company.name}</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:backgroundColors,padding:10,borderRadius:50,width:75,height:75}}>
          <Text style={styles.name}>{initials}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 15,
  },
  text1: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.DARKGRAY,
  },
  text2: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.SLATEGRAY,
  },
  text3: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.SOFTORANGE,
  },
  name: {
    fontSize: 30,
    color:"white",
    fontWeight:"900",
   
  
  
  },
});
