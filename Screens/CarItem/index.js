import { Text, View, ImageBackground ,TouchableOpacity} from "react-native";
import React from "react";
import styles from "./style";

const CarItem = ({ car }) => {
  return (
    <View style={styles.CarItem_container}>
      <ImageBackground source={car.image} style={styles.image_background} />
      <View style={styles.tittle_Box}>
        <Text style={styles.CarItem_Tittle}>{car.name}</Text>
        <Text style={styles.CarItem_Sub_Tittle}>{car.tagline}</Text>
      </View>
      <View style={styles.buttons}>
      <TouchableOpacity
      style={styles.customOrder}
      >
        <Text style={styles.customOrder_Text}>Custom Order</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.existingOrder}
      >
        <Text style={styles.existingOrder_Text}>Existing Inventory</Text>
      </TouchableOpacity>
      </View>
    </View>
    
  );
};

export default CarItem;
