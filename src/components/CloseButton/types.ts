import type { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';
export interface CustomButtonProps {
  onClose: Function;
  customBackImageSource?: ImageSourcePropType;
  customBackImageStyle?: StyleProp<ImageStyle>;
}
