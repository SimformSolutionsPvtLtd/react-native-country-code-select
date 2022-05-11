import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../theme';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: verticalScale(55),
  },
  leftAndRightControl: {
    padding: verticalScale(15),
    justifyContent: 'center',
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: moderateScale(16),
  },
  searchInput: {
    height: verticalScale(45),
    fontSize: moderateScale(16),
    flex: 1,
  },
});
