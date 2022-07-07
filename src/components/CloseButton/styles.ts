import { StyleSheet } from 'react-native';
import { verticalScale } from '../../theme';

export default StyleSheet.create({
  closeImage: {
    height: verticalScale(15),
    width: verticalScale(15),
  },
  leftAndRightControl: {
    flex: 1,
    padding: verticalScale(15),
    justifyContent: 'center',
    maxWidth: verticalScale(55),
  },
});
