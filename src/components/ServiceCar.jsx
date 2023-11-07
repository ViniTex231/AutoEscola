import {View, Text, Image, TouchableOpacity} from "react-native"
import styles from "../pages/Main/style"

export default function ServiceCar(props){
  return(
    <View style={styles.service}>
      <Image
        source={require("../assets/car.png")}
        resizeMode="contain"
      />
      <Text style={styles.serviceText}>{props.text}</Text>
    </View>
  )
}
