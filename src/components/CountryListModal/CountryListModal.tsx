import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { getCountriesAsync } from '../../utils/commonHelpers';
import { CountryList } from '../CountryList';
import { CustomModal, customModalRef } from '../CustomModal';
import { Header } from '../Header';
import styles from './styles';
import type { Country, CountryListModalProps } from './types';

const search = (data: any[], filter: string) => {
  return data.filter((country: { name: string | any[] }) =>
    country.name?.includes(filter)
  );
};

export const CountryListModal = ({
  isVisible = false,
  onClose = () => {},
  header = 'Country Picker',
  onSelect = () => {},
  customBackImage = undefined,
  customBackImageStyle = {},
  isFlagVisible = false,
  isAlphabetsVisible = false,
  headerSearchPlaceholder,
  isSearchInputVisible = true,
  renderCustomSearchInput = undefined,
  searchHeaderStyle = {},
  searchHeaderProps = {},
  isCloseButtonVisible = true,
  countryListTitleStyle = {},
}: CountryListModalProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filterString, setFilterString] = useState<string>('');
  const onSelectRow = useCallback(
    (data: object) => {
      onSelect(data);
      onClose(false);
    },
    [onClose, onSelect]
  );

  useEffect(() => {
    //loading country list
    setCountries(getCountriesAsync());
  }, []);

  useEffect(() => {
    customModalRef.current?.toggleModal(isVisible);
  }, [isVisible]);

  return (
    <CustomModal {...{ onClose }}>
      <SafeAreaView style={styles.container}>
        <Header
          onClose={onClose}
          {...{
            header,
            customBackImage,
            customBackImageStyle,
            filterString,
            setFilterString,
            headerSearchPlaceholder,
            renderCustomSearchInput,
            isSearchInputVisible,
            searchHeaderStyle,
            isCloseButtonVisible,
            searchHeaderProps,
          }}
        />
        <CountryList
          data={search(countries, filterString)}
          {...{
            onSelect: onSelectRow,
            isFlagVisible,
            isAlphabetsVisible,
            countryListTitleStyle,
          }}
        />
      </SafeAreaView>
    </CustomModal>
  );
};
