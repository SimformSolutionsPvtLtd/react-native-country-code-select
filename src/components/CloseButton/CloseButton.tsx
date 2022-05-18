import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { Icons } from '../../assets';
import styles from './styles';
import type { CustomButtonProps } from './types';

const CloseButton = ({
  onClose,
  customBackImage = undefined,
  customBackImageStyle = {},
}: CustomButtonProps) => {
  const styleForCloseImage = StyleSheet.flatten([
    styles.closeImage,
    customBackImageStyle,
  ]);

  return (
    <Pressable onPress={onClose} style={styles.leftAndRightControl}>
      <Image
        source={customBackImage ?? Icons.closeImage}
        style={styleForCloseImage}
      />
    </Pressable>
  );
};

export default CloseButton;
