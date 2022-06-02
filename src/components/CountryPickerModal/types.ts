import type React from 'react';
import type { TextInputProps } from 'react-native';
import type { CustomButtonProps } from '../CloseButton';

interface FunctionProps {
  setFilterString: React.Dispatch<React.SetStateAction<string>>;
}

export interface CountryPickerModalAdditionalProps {
  isFlagVisible?: boolean;
  isAlphabetsVisible?: boolean;
  headerSearchPlaceholder?: string;
  isSearchInputVisible?: boolean;
  renderCustomSearchInput?: ({ setFilterString }: FunctionProps) => JSX.Element;
  searchHeaderStyle?: object | undefined;
  isCloseButtonVisible?: boolean | undefined;
  searchHeaderProps?: TextInputProps | undefined;
  countryListTitleStyle?: object;
  customModalStyles?: object | undefined;
  customTopHeaderStyle?: object | undefined;
  customRowStyle?: object | undefined;
  customAlphabetsStyles?: object | undefined;
  customAlphabetContainerStyles?: object | undefined;
  emptyText?: string;
  emptyTextStyle?: object | undefined;
  emptyContainerStyles?: object | undefined;
  renderCustomEmptyComponent?: React.ReactNode | undefined;
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
