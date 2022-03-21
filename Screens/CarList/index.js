import { View, Text,FlatList } from 'react-native'
import React from 'react'
import styles from './style';
import CarItem from '../CarItem';
import Car from './Car';
import { Dimensions } from 'react-native';
const CarList = () => {
  return (
    <View style={styles.car_List_container}>
      <FlatList
        data={Car}
        renderItem={({item})=><CarItem car={item}/>}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
      />
    </View>
  )
}

export default CarList