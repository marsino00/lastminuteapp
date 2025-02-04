import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
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
  inputCombo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 15,
    elevation: 5,
    marginBottom: 15,
  },
  sortControls: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    gap: 10,
  },
  dropdown: {
    height: 45,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'medium',
  },
});
