import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  containerReading: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  headerReading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#0B3B60', 
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center', 
  },
  itemTitle: {
    fontSize: 18,
    color: 'white', 
  }
});
