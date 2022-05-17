import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import type { Country, OtherOptionsProps } from '../CountryListModal';
import styles from './styles';
import type { OnSelectProps } from './types';

/**
 * @todo
 * Design improvements
 */
const CountryRow = ({
  name,
  callingCode,
  countryInitials,
  region,
  subregion,
  flag,
  onSelect,
  isFlagVisible = false,
  countryListTitleStyle = {},
}: Country & OnSelectProps & OtherOptionsProps) => {
  const countryListStyle = StyleSheet.flatten([
    styles.name,
    countryListTitleStyle,
  ]);
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        onSelect?.({
          name,
          callingCode,
          countryInitials,
          region,
          subregion,
        })
      }
    >
      {isFlagVisible && <Image source={{ uri: flag }} style={styles.flag} />}
      <Text style={countryListStyle}>
        {name} (+{callingCode})
      </Text>
    </Pressable>
  );
};

export default CountryRow;
