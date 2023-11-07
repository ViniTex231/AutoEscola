import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import styles from "../NewDrive/style"
import Navbar from "../../components/Navbar"
import ButtonBig from "../../components/ButtonBig"
import Input from "../../components/Input"
import { AntDesign } from "@expo/vector-icons"

export default function NewDrive({ navigation }){
  return(
    <View style={styles.container}>
      <Navbar/>

      <View style={styles.menu}>
        <View style={styles.menuTextBox}>
          <TouchableOpacity onPress={()=> navigation.navigate("Main")}>
            <AntDesign 
              name="arrowleft"
              size={30}
              color={"#FFBF3F"}
            />
          </TouchableOpacity>
          <Text style={styles.menuText}>Adicionar Motoristas</Text>
        </View>
        <View style={styles.inputBox}>
          <Input label="Nome" placeholder="Vinícius"/>
          <Input label="Data de Nascimento" placeholder="07/11/2023"/>
          <View style={styles.button}>
            <ButtonBig label="Adicionar"/>
          </View>
        </View>
      </View>
    </View>
  )
}