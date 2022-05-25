import type React from 'react';
import type { TextInputProps } from 'react-native';
import type { CustomButtonProps } from '../CloseButton';

interface FunctionProps {
  setFilterString: React.Dispatch<React.SetStateAction<string>>;
}

export interface OtherOptionsProps {
  isFlagVisible?: boolean;
  isAlphabetsVisible?: boolean;
  headerSearchPlaceholder?: string;
  isSearchInputVisible?: boolean;
  renderCustomSearchInput?: ({ setFilterString }: FunctionProps) => JSX.Element;
  searchHeaderStyle?: object | undefined;
  isCloseButtonVisible?: boolean | undefined;
  searchHeaderProps?: TextInputProps | undefined;
  countryListTitleStyle?: object;
}

export interface CountryListModalProps
  extends CustomButtonProps,
    OtherOptionsProps {
  isVisible: boolean;
  onClose: (event: Event) => void;
  animationType?: 'slide' | 'none' | 'fade' | undefined;
  header: string;
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
