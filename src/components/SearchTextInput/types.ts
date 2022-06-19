import type { Dispatch, SetStateAction } from 'react';
import type { FunctionProps } from '../CountryPickerModal/types';

export interface ClearButtonProps {
  setFilterString: Dispatch<SetStateAction<string>>;
  renderSearchInputClear?: ({ setFilterString }: FunctionProps) => JSX.Element;
}

export interface SearchTextInputProps extends ClearButtonProps {
  filterString?: string;
  headerSearchPlaceholder?: string;
  searchHeaderInputStyle?: object | undefined;
  searchHeaderProps?: object | undefined;
}
