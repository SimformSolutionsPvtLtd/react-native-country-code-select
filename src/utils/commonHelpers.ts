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

const uniq = (arr: any[]) => Array.from(new Set(arr));

export const getLetters = (countries: Country[]) => {
  return uniq(
    countries
      .map((country: Country) =>
        (country.name as string)?.substr(0, 1).toLocaleUpperCase()
      )
      .sort((firstCountry: string, secondCountry: string) =>
        firstCountry.localeCompare(secondCountry)
      )
  );
};
