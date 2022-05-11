import React, { useEffect } from 'react';
import { TextInput, View } from 'react-native';
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
}: HeaderProps) => {
  useEffect(() => {
    return () => {
      setFilterString?.('');
    };
  }, [setFilterString]);

  return (
    <View style={styles.headerContainer}>
      <CloseButton {...{ onClose, customBackImage, customBackImageStyle }} />
      <View style={styles.headerTitleContainer}>
        <TextInput
          value={filterString}
          style={styles.searchInput}
          placeholder={headerSearchPlaceholder}
          onChangeText={(filter) => setFilterString(filter)}
        />
      </View>
      <View style={styles.leftAndRightControl} />
    </View>
  );
};

export default Header;
