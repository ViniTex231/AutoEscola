import { View, Text, TouchableOpacity } from "react-native"
import styles from "../pages/Main/style"

export default function ButtonSmall(props){
  return(
    <TouchableOpacity style={styles.buttonSmall}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}