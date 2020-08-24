import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
  flex: 1,
  justifyContent: 'center',
  },

  backbook:{
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#04d361',
  },

  background:{
    flex: 0,
    width: '100%',
    height: 400,
    alignItems: 'center',
    position: 'absolute',
    resizeMode: 'contain',
    justifyContent: 'center',
    transform: [{ rotate: '270deg' }],
  },

  book:{
    padding: 50,
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