import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants/colors';

export const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 20,
  },
  input: {
    height: 40,
    borderColor: COLORS.TEXT_SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS.BACKGROUND_LIGHT,
    marginHorizontal: 5,
  },
  inputCombo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterContainer: {
    backgroundColor: COLORS.BACKGROUND_LIGHT,
    padding: 15,
    borderRadius: 10,
    shadowColor: COLORS.TEXT_PRIMARY,
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
    borderColor: COLORS.TEXT_SECONDARY,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: COLORS.BACKGROUND_LIGHT,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'medium',
  },
});
