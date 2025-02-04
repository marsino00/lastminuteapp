import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f5f5f5',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  inputCombo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  dropdown: {
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  sortControls: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
    gap: 10,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    gap: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'medium',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  sortButtonText: {
    color: '#fff',
    fontSize: 16,
    alignItems: 'center',
    marginRight: 8,
  },
});
