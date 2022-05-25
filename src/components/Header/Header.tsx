import React, { useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { CloseButton } from '../CloseButton';
import styles from './styles';
import type { HeaderProps } from './types';

const Header = ({
  onClose = () => {},
  customBackImage,
  customBackImageStyle,
  filterString,
  setFilterString,
  headerSearchPlaceholder = undefined,
  isSearchInputVisible,
  renderCustomSearchInput,
  searchHeaderStyle,
  searchHeaderProps,
  isCloseButtonVisible,
}: HeaderProps) => {
  const textInputStyle = StyleSheet.flatten([
    styles.searchInput,
    searchHeaderStyle,
  ]);
  useEffect(() => {
    return () => {
      setFilterString?.('');
    };
  }, [setFilterString]);

  return (
    <View style={styles.headerContainer}>
      {isCloseButtonVisible && (
        <CloseButton {...{ onClose, customBackImage, customBackImageStyle }} />
      )}
      <View style={styles.headerTitleContainer}>
        {renderCustomSearchInput &&
          renderCustomSearchInput({ setFilterString })}
        {!renderCustomSearchInput && isSearchInputVisible && (
          <TextInput
            value={filterString}
            style={textInputStyle}
            placeholder={headerSearchPlaceholder}
            onChangeText={(filter) => setFilterString(filter)}
            {...searchHeaderProps}
          />
        )}
      </View>
      <View style={styles.leftAndRightControl} />
    </View>
  );
};

export default Header;
