import { View, Text, TextInput } from "react-native"
import styles from "../pages/NewCar/style"

export default function Input(props){
  return(
    <View style={styles.boxInput}>
      <View>
        <Text style={styles.descText}>{props.label}</Text>
      </View>
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
      />
    </View>
  )
}