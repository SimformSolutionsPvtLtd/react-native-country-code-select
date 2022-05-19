import React, { useCallback, useEffect, useState } from 'react';
import { Modal, SafeAreaView } from 'react-native';
import { getCountriesAsync } from '../../utils/commonHelpers';
import { CountryList } from '../CountryList';
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
  animationType = 'slide',
  header = 'Country Picker',
  onSelect = () => {},
  customBackImage = undefined,
  customBackImageStyle = {},
  isFlagVisible = false,
  isAlphabetsVisible = false,
  headerSearchPlaceholder,
}: CountryListModalProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filterString, setFilterString] = useState<string>('');
  const onSelectRow = useCallback(
    (data) => {
      onSelect(data);
      onClose(false);
    },
    [onClose, onSelect]
  );

  useEffect(() => {
    //loading country list
    setCountries(getCountriesAsync());
  }, []);

  return (
    <Modal {...{ visible: isVisible }} {...{ animationType }}>
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
          }}
        />
        <CountryList
          data={search(countries, filterString)}
          {...{ onSelect: onSelectRow, isFlagVisible, isAlphabetsVisible }}
        />
      </SafeAreaView>
    </Modal>
  );
};
