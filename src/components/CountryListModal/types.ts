import type { CustomButtonProps } from '../CloseButton';

export interface OtherOptionsProps {
  isFlagVisible: boolean;
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
