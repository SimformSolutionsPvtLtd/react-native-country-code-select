import type {
  Country,
  CountryPickerModalAdditionalProps,
} from '../CountryPickerModal';
import type { OnSelectProps } from '../CountryRow';

export interface EmptyComponentProps {
  emptyText?: string;
  emptyTextStyle?: object | undefined;
  emptyContainerStyles?: object | undefined;
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
  customRowStyle?: object | undefined;
}
