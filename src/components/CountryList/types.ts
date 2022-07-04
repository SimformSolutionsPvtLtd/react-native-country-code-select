import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type {
  Country,
  CountryPickerModalAdditionalProps,
} from '../CountryPickerModal';
import type { OnSelectProps } from '../CountryRow';

export interface EmptyComponentProps {
  emptyText?: string;
  emptyTextStyle?: StyleProp<TextStyle>;
  emptyContainerStyles?: StyleProp<ViewStyle>;
  renderCustomEmptyComponent?: any;
}
export interface CountryListProps
  extends OnSelectProps,
    CountryPickerModalAdditionalProps {
  data: Country[];
  isVisible: boolean;
}

export interface HeightProps {
  height: number;
}

export interface LetterProps extends CountryPickerModalAdditionalProps {
  letter: string;
  scrollTo(letter: string): void;
  customRowStyle?: StyleProp<ViewStyle>;
}
