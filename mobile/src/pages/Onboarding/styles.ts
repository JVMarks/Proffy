import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
  flex: 1,
  justifyContent: 'center',
  },

  backbook:{
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#8257E5',
  },

  book:{
    padding: 70,
    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    resizeMode: 'contain',
  },

  bookText:{
    flex: 2,
    padding: 40,
  },

  bookTextNu:{
    fontFamily: 'Archivo_400Regular',
    fontSize: 40,
    lineHeight: 44,
    color: "#6A6180",
    opacity: 0.16,
  },

  bookTextLine:{
    marginTop: 30,
    fontFamily:'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 30,
    lineHeight: 34,
  },

  bookArrow:{
    flex: 0,
    padding: 40,
    flexDirection: 'row',
  },

  bookArrowimg:{
    padding: 20,
    transform: [{ rotate: '180deg' }],
  }

})

export default styles;