import { StyleSheet } from 'react-native';
import { Colors, Metrics, verticalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    height: Metrics.screenHeight - verticalScale(55),
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 25,
    position: 'absolute',
    top: Metrics.screenHeight,
  },
  line: {
    width: verticalScale(75),
    height: verticalScale(4),
    backgroundColor: Colors.grey,
    marginVertical: verticalScale(12),
    borderRadius: 4,
    alignSelf: 'center',
  },
});
