import {View, Text, TouchableOpacity} from "react-native"
import styles from "../pages/Main/style"

export default function ButtonBig(props){
  return (
    <TouchableOpacity style={styles.buttonBig}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}