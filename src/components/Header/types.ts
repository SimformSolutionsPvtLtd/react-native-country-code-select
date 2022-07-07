import type { Dispatch, SetStateAction } from 'react';
import type { CustomButtonProps } from '../CloseButton';
import type { CountryPickerModalAdditionalProps } from '../CountryPickerModal';

export interface HeaderProps
  extends CustomButtonProps,
    CountryPickerModalAdditionalProps {
  filterString: string;
  setFilterString: Dispatch<SetStateAction<string>>;
  headerSearchPlaceholder?: string;
}
