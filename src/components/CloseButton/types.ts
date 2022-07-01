import type { ImageSourcePropType } from 'react-native';
export interface CustomButtonProps {
  onClose: Function;
  customBackImageSource?: ImageSourcePropType | undefined;
  customBackImageStyle?: object;
}
