import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import type {
  Country,
  CountryPickerModalAdditionalProps,
} from '../CountryPickerModal';
import styles from './styles';
import type { OnSelectProps } from './types';

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
  customRowStyle,
}: Country & OnSelectProps & CountryPickerModalAdditionalProps) => {
  const countryListStyle = StyleSheet.flatten([
    styles.name,
    countryListTitleStyle,
  ]);
  return (
    <Pressable
      style={[styles.container, customRowStyle]}
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
