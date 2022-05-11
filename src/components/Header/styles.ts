import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../theme/Metrics';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: verticalScale(55),
  },
  leftAndRightControl: {
    flex: 1,
    padding: verticalScale(15),
    justifyContent: 'center',
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: moderateScale(16),
  },
});
