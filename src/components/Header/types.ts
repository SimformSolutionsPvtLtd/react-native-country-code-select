import type { Dispatch, SetStateAction } from 'react';
import type { CustomButtonProps } from '../CloseButton';

export interface HeaderProps extends CustomButtonProps {
  header: string;
  filterString: string;
  setFilterString: Dispatch<SetStateAction<string>>;
  headerSearchPlaceholder?: string;
}
