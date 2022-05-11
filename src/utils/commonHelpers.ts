import type { Country } from '../components/CountryListModal';
import {
  CountryCodeList,
  countryList,
  countryListWithFlags,
} from '../constants';

export const getCountriesAsync = () => {
  const newCountryCodeList = [...CountryCodeList]
    .map((item) => ({
      ...countryList[item],
      countryInitials: item,
      name: countryListWithFlags[item].name?.common,
    }))
    .sort((country1: Country, country2: Country) =>
      (country1.name as string).localeCompare(country2.name as string)
    );

  return newCountryCodeList;
};
