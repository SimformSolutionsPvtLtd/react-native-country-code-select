import React, { createRef, useImperativeHandle } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import useCustomModal from './hooks/useCustomModal';
import styles from './styles';
import type { CustomModalProps, CustomModalRefProps } from './types';

export const customModalRef = createRef<CustomModalRefProps>();

const CustomModal = ({
  children,
  onClose,
  modalContainerStyle,
  handleStyle,
  handleComponent,
}: CustomModalProps) => {
  const { gestureHandler, animatedBottomStyle, toggleModal } = useCustomModal({
    onClose,
  });

  useImperativeHandle(
    customModalRef,
    () => ({
      toggleModal,
    }),
    [toggleModal]
  );

  const topViewStyles = StyleSheet.flatten([
    styles.container,
    modalContainerStyle,
  ]);

  return (
    <GestureDetector gesture={gestureHandler}>
      <Animated.View style={[animatedBottomStyle, topViewStyles]}>
        {handleComponent && handleComponent()}
        {!handleComponent && <View style={[styles.line, handleStyle]} />}
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
export default CustomModal;
