import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../theme';

export default StyleSheet.create({
  name: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: verticalScale(10),
  },
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingLeft: verticalScale(10),
    height: verticalScale(55),
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    height: verticalScale(20),
    width: verticalScale(25),
  },
});
