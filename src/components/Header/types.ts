import type { Dispatch, SetStateAction } from 'react';
import type { CustomButtonProps } from '../CloseButton';
import type { OtherOptionsProps } from '../CountryListModal';

export interface HeaderProps extends CustomButtonProps, OtherOptionsProps {
  header: string;
  filterString: string;
  setFilterString: Dispatch<SetStateAction<string>>;
  headerSearchPlaceholder?: string;
}
