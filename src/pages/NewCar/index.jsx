import {View, Text, TouchableOpacity} from "react-native"
import React, { useState } from "react"
import styles from "../NewCar/style"
import Navbar from "../../components/Navbar"
import ButtonBig from "../../components/ButtonBig"
import Input from "../../components/Input"
import { AntDesign } from "@expo/vector-icons"
import axios from 'axios'

export default function NewCar({ navigation }){

  const [nome, setNome] = useState('')
  const [placa, setPlaca] = useState('')
  const [ano, setAno] = useState(0)
  const [dono, setDono] = useState('')

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
          <Text style={styles.menuText}>Adicionar Carros</Text>
        </View>
        <View style={styles.inputBox}>
          <Input label="Modelo" placeholder="Civic"/>
          <View style={styles.doubleButton}>
            <Input label="Placa" placeholder="ABC-0A12"/>
            <Input label="Ano" placeholder="2023"/>
          </View>
          <Input label="Proprietario" placeholder="Alemão"/>
          <View style={styles.button}>
            <ButtonBig label="Adicionar"/>
          </View>
        </View>
      </View>
    </View>
  )
}