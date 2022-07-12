import type React from 'react';
import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type { CustomButtonProps } from '../CloseButton';

export interface FunctionProps {
  setFilterString: React.Dispatch<React.SetStateAction<string>>;
  filterString?: string;
}

export interface CountryPickerModalAdditionalProps {
  isFlagVisible?: boolean;
  isAlphabetsVisible?: boolean;
  headerSearchPlaceholder?: string;
  isSearchInputVisible?: boolean;
  renderCustomSearchInput?: ({
    setFilterString,
    filterString,
  }: FunctionProps) => JSX.Element;
  searchHeaderInputStyle?: StyleProp<ViewStyle>;
  isCloseButtonVisible?: boolean;
  searchHeaderProps?: TextInputProps;
  countryListTitleStyle?: StyleProp<TextStyle>;
  modalContentStyle?: StyleProp<ViewStyle>;
  modalContainerStyle?: StyleProp<ViewStyle>;
  customRowStyle?: StyleProp<ViewStyle>;
  customAlphabetsStyles?: StyleProp<TextStyle>;
  customAlphabetContainerStyles?: StyleProp<ViewStyle>;
  emptyText?: string;
  emptyTextStyle?: StyleProp<TextStyle>;
  emptyContainerStyles?: StyleProp<ViewStyle>;
  renderCustomEmptyComponent?: () => JSX.Element;
  customCloseButton?: () => JSX.Element;
  renderSearchInputClear?: ({ setFilterString }: FunctionProps) => JSX.Element;
  handleStyle?: StyleProp<ViewStyle>;
  handleComponent?: () => JSX.Element;
}

export interface CountryPickerModalProps
  extends CustomButtonProps,
    CountryPickerModalAdditionalProps {
  isVisible: boolean;
  onClose: (event: Event) => void;
  onSelect?: (event: Event) => void;
}

export interface Country {
  name: string;
  flag: string;
  countryInitials: string;
  region: string;
  subregion: string;
  callingCode: string[];
  currency: string[];
}
