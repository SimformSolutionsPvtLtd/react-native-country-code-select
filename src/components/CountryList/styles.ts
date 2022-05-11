import { StyleSheet } from 'react-native';
import { Metrics, moderateScale, verticalScale } from '../../theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flexGrow: 1,
    width: Metrics.screenWidth * 0.9,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: moderateScale(18),
  },
  letterText: {
    fontSize: moderateScale(14),
  },
  letter: {
    height: verticalScale(23),
    width: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  letters: {
    marginRight: 10,
    width: verticalScale(20),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
