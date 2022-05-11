import React from 'react';
import { FlatList } from 'react-native';
import { CountryRow } from '../CountryRow';
import styles from './styles';
import type { CountryListProps } from './types';

/**
 * @todo
 * Add filter index to the country list
 */
const CountryList = ({ data, onSelect, isFlagVisible }: CountryListProps) => {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <CountryRow {...item} {...{ onSelect, isFlagVisible }} />
      )}
    />
  );
};

export default CountryList;
