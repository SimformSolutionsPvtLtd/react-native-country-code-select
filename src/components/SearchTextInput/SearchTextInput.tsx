import React from 'react';
import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Icons } from '../../theme';
import styles from './styles';
import type { ClearButtonProps, SearchTextInputProps } from './types';

const renderClearView = ({ setFilterString }: ClearButtonProps) => (
  <Pressable
    style={styles.closeButtonContainer}
    onPress={() => setFilterString('')}
  >
    <Image
      source={Icons.closeImage}
      style={styles.closeImage}
      resizeMode="contain"
    />
  </Pressable>
);

const SearchTextInput = ({
  filterString,
  searchHeaderStyle,
  headerSearchPlaceholder,
  setFilterString,
  searchHeaderProps,
}: SearchTextInputProps) => {
  const textInputStyle = StyleSheet.flatten([
    styles.searchInput,
    searchHeaderStyle,
  ]);
  return (
    <View style={styles.container}>
      <TextInput
        multiline={false}
        value={filterString}
        style={textInputStyle}
        placeholder={headerSearchPlaceholder}
        onChangeText={(filter: string) => setFilterString(filter)}
        {...searchHeaderProps}
      />
      {filterString !== '' && renderClearView({ setFilterString })}
    </View>
  );
};

export default SearchTextInput;
