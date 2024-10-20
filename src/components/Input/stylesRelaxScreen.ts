import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  containerRelax: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  logoContainer: {
    position: 'absolute',
    top: 40, 
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black', 
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, 
    marginBottom: 40, 
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '0B3B60', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInstruction: {
    fontSize: 20,
    marginTop: 20,
    color: 'black', 
  },
});
