import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../theme/Metrics';

export default StyleSheet.create({
  name: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: verticalScale(10),
  },
  container: {
    padding: verticalScale(10),
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  },
  flag: {
    height: verticalScale(20),
    width: verticalScale(25),
  },
});
