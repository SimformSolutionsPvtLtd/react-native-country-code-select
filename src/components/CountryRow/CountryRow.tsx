import React from 'react';
import { Image, Pressable, Text } from 'react-native';
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
}: Country & OnSelectProps & OtherOptionsProps) => {
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
      <Text style={styles.name}>
        {name} (+{callingCode})
      </Text>
    </Pressable>
  );
};

export default CountryRow;
