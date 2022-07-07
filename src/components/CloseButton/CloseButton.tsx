import React, { useCallback } from 'react';
import { Image, Keyboard, Pressable, StyleSheet } from 'react-native';
import { Icons } from '../../assets';
import styles from './styles';
import type { CustomButtonProps } from './types';

const CloseButton = ({
  onClose,
  customBackImageSource = undefined,
  customBackImageStyle = {},
}: CustomButtonProps) => {
  const styleForCloseImage = StyleSheet.flatten([
    styles.closeImage,
    customBackImageStyle,
  ]);

  const onClosePressed = useCallback(() => {
    Keyboard.dismiss();
    onClose();
  }, [onClose]);

  return (
    <Pressable onPress={onClosePressed} style={styles.leftAndRightControl}>
      <Image
        source={customBackImageSource ?? Icons.closeImage}
        style={styleForCloseImage}
      />
    </Pressable>
  );
};

export default CloseButton;
