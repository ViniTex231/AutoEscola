import { StyleSheet } from "react-native";

const COLORS = {
  primaryYellow: "#FFBF3F",
  primaryBlue: "#002650",
  normalWhite: "#FFF",
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    width: "100%",
    height: "8%",
    display: "flex",
    justifyContent: "flex-start",
    paddingStart: "5%",
    backgroundColor: COLORS.primaryBlue,
    justifyContent: 'center',
  },
  headerText:{
    fontSize: 18,
    justifyContent: 'flex-start',
    paddingStart: "7%",
  },
  menuCar:{
    paddingStart: "5%",
    paddingEnd: "5%",
    paddingTop: "10%",
  },
  menuDriver:{
    paddingStart: "5%",
    paddingEnd: "5%",
    paddingTop: "10%",
  },
  menuSchedule:{
    paddingStart: "5%",
    paddingEnd: "5%",
    paddingTop: "10%",
  },
  buttonsBox:{
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBig:{
    width: 177,
    height: 61,
    backgroundColor: COLORS.primaryYellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSmall:{
    width: 128,
    height: 61,
    backgroundColor: COLORS.primaryYellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    color: COLORS.normalWhite,
    fontSize: 25,
  },
  service:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },
  serviceText:{
    width: 241,
    color: COLORS.primaryYellow,
  },
  services:{
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingTop: '10%',
    marginTop: '10%',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlue,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
  },
  mainText:{
    color: COLORS.primaryYellow,
    fontSize: 33,
  }
})

export default styles