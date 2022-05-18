import React from 'react';
import { Text, View } from 'react-native';
import CloseButton from '../CloseButton/CloseButton';
import styles from './styles';
import type { HeaderProps } from './types';

/**
 * @todo
 * add search field to header
 */
const Header = ({
  onClose = () => {},
  header = '',
  customBackImage,
  customBackImageStyle,
}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <CloseButton {...{ onClose, customBackImage, customBackImageStyle }} />
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>{header}</Text>
      </View>
      <View style={styles.leftAndRightControl} />
    </View>
  );
};

export default Header;
