import type { Country, OtherOptionsProps } from '../CountryListModal';
import type { OnSelectProps } from '../CountryRow';

export interface CountryListProps extends OnSelectProps, OtherOptionsProps {
  data: Country[];
}

export interface LetterProps {
  letter: string;
  scrollTo(letter: string): void;
}
