import React, { useCallback, useEffect, useState } from 'react';
import { Modal, SafeAreaView } from 'react-native';
import { getCountriesAsync } from '../../utils/commonHelpers';
import CountryList from '../CountryList/CountryList';
import Header from '../Header/Header';
import styles from './styles';
import type { Country, CountryListModalProps } from './types';

export const CountryListModal = ({
  isVisible = false,
  onClose = () => {},
  animationType = 'slide',
  header = 'Country Picker',
  onSelect = () => {},
  customBackImage = undefined,
  customBackImageStyle = {},
  isFlagVisible = false,
}: CountryListModalProps) => {
  const [countries, setCountries] = useState<Country[]>([]);

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
          {...{ header, customBackImage, customBackImageStyle }}
        />
        <CountryList
          data={countries}
          {...{ onSelect: onSelectRow, isFlagVisible }}
        />
      </SafeAreaView>
    </Modal>
  );
};
