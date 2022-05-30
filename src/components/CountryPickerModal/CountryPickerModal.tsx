import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { getCountriesAsync } from '../../utils/commonHelpers';
import { CountryList } from '../CountryList';
import { CustomModal, customModalRef } from '../CustomModal';
import { Header } from '../Header';
import styles from './styles';
import type { Country, CountryPickerModalProps } from './types';

const search = (data: any[], filter: string) => {
  return data.filter((country: { name: string | any[] }) =>
    country.name?.includes(filter)
  );
};

export const CountryPickerModal = ({
  isVisible = false,
  onClose = () => {},
  onSelect = () => {},
  customBackImage = undefined,
  customBackImageStyle = {},
  isFlagVisible = false,
  isAlphabetsVisible = true,
  headerSearchPlaceholder = 'Enter Country',
  isSearchInputVisible = true,
  renderCustomSearchInput = undefined,
  searchHeaderStyle = {},
  searchHeaderProps = {},
  isCloseButtonVisible = false,
  countryListTitleStyle = {},
  customModalStyles = {},
  customTopHeaderStyle = {},
  customRowStyle = {},
  customAlphabetsStyles = {},
  customAlphabetContainerStyles = {},
  emptyText = 'Oops, there is no country available',
  emptyTextStyle = {},
  emptyContainerStyles = {},
  renderCustomEmptyComponent,
}: CountryPickerModalProps) => {
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
    setCountries(getCountriesAsync());
  }, []);

  useEffect(() => {
    customModalRef.current?.toggleModal(isVisible);
  }, [isVisible]);

  return (
    <CustomModal {...{ onClose, customTopHeaderStyle }}>
      <SafeAreaView style={[styles.container, customModalStyles]}>
        <Header
          onClose={onClose}
          {...{
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
            customRowStyle,
            customAlphabetsStyles,
            customAlphabetContainerStyles,
            emptyText,
            emptyTextStyle,
            emptyContainerStyles,
            renderCustomEmptyComponent,
          }}
        />
      </SafeAreaView>
    </CustomModal>
  );
};