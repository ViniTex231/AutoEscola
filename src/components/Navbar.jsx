import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "../pages/Main/style"

export default function Navbar(){
  return(
    <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
          resizeMode="contain"
        />
      </View>
  )
}