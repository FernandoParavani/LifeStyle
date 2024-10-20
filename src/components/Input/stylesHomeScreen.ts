// stylesHomeScreen.js
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  containerMenu: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: 120, 
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleMenu: {
    fontSize: 24, 
    fontWeight: 'bold',
  },
  buttonMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B3B60',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  summarySection: {
    marginTop: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  summaryBox: {
    width: '45%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
  },
  summaryNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3B60',
  },
});
