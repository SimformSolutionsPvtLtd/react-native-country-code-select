import type { Dispatch, SetStateAction } from 'react';

export interface ClearButtonProps {
  setFilterString: Dispatch<SetStateAction<string>>;
}

export interface SearchTextInputProps extends ClearButtonProps {
  filterString?: string;
  headerSearchPlaceholder?: string;
  searchHeaderStyle?: object | undefined;
  searchHeaderProps?: object | undefined;
}
