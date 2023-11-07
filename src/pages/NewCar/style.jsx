import { StyleSheet } from "react-native"

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
    width: '100%',
    height: '8%',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingStart: '5%',
    backgroundColor: COLORS.primaryBlue,
    justifyContent: 'center',
  },
  menu:{
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  menuTextBox:{
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: '5%',
  },
  menuText:{
    fontSize: 21,
  },
  descText:{
    fontSize: 18,
    borderBottomColor: COLORS.primaryYellow,
    borderBottomWidth: 1,
    width: 120,
  },
  boxInput:{
    marginTop: 30,
  },
  doubleButton:{
    flexDirection: 'row',
    gap: 100,
  },
  button:{
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

})

export default styles