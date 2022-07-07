import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(55),
    paddingRight: verticalScale(15),
    alignItems: 'center',
  },
  closeButtonContainer: {
    backgroundColor: Colors.lightGrey,
    borderRadius: verticalScale(12),
    padding: verticalScale(2),
    height: verticalScale(20),
    width: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeImage: {
    height: verticalScale(8),
    width: verticalScale(8),
  },
  searchInput: {
    flex: 1,
    height: verticalScale(45),
    fontSize: moderateScale(16),
    paddingRight: verticalScale(10),
  },
});
