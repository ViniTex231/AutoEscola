import { View, Text } from "react-native"
import React from "react"
import styles from "./style"
import ButtonBig from "../../components/ButtonBig"
import ButtonSmall from "../../components/ButtonSmall"
import ServiceCar from "../../components/ServiceCar"
import ServiceClutch from "../../components/ServiceClutch"
import ServicePencil from "../../components/ServicePencil"
import Navbar from "../../components/Navbar"
import { TouchableOpacity } from "react-native-gesture-handler"

export default function Main({ navigation }) {
  return(
    <View style={styles.container}>
      <Navbar/>

      <View style={styles.menuCar}>
        <Text style={styles.headerText}>Carros</Text>
        <View style={styles.buttonsBox}>
          <TouchableOpacity onPress={()=> navigation.navigate("NewCar")}>
            <ButtonBig label="Adicionar"/>
          </TouchableOpacity>
          <ButtonSmall label="Ver"/>
        </View>
      </View>

      <View style={styles.menuDriver}>
        <Text style={styles.headerText}>Motoristas</Text>
        <View style={styles.buttonsBox}>
          <TouchableOpacity onPress={()=> navigation.navigate("NewDrive")}>
            <ButtonBig label="Adicionar"/>
          </TouchableOpacity>
          <ButtonSmall label="Ver"/>
        </View>
      </View>

      <View style={styles.menuSchedule}>
        <Text style={styles.headerText}>Agenda</Text>
        <View style={styles.buttonsBox}>
          <ButtonBig label="Adicionar"/>
          <ButtonSmall label="Ver"/>
        </View>
      </View>

      <View style={styles.services}>
        <Text style={styles.mainText}>Serviços</Text>
        <ServiceCar text="Tem pouca experiência no trânsito? Aqui te colocamos nos trilhos!"/>
        <ServiceClutch text="Ta na dúvida entre automático e manual? Aqui você dirige os dois!"/>
        <ServicePencil text="Vai estacionar e parece que está manobrando um caminhão? Aqui você aprende as melhores técnicas!"/>
      </View>

    </View>
  )
}