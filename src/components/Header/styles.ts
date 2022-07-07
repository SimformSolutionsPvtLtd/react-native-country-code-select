import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../theme';

export default StyleSheet.create({
  leftAndRightControl: {
    flex: 1,
    padding: verticalScale(15),
    justifyContent: 'center',
    maxWidth: verticalScale(55),
  },
  headerContainer: {
    flexDirection: 'row',
    height: verticalScale(55),
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  paddingLeftStyle: {
    paddingLeft: verticalScale(15),
  },
  headerTitle: {
    fontSize: moderateScale(16),
  },
});
