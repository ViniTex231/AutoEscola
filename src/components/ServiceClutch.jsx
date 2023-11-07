import {View, Text, Image, TouchableOpacity} from "react-native"
import styles from "../pages/Main/style"

export default function ServiceClutch(props){
  return(
    <View style={styles.service}>
      <Image
        source={require("../assets/clutch.png")}
        resizeMode="contain"
      />
      <Text style={styles.serviceText}>{props.text}</Text>
    </View>
  )
}