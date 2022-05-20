import React, { createRef, useImperativeHandle } from 'react';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import useCustomModal from './hooks/useCustomModal';
import styles from './styles';
import type { CustomModalProps, CustomModalRefProps } from './types';

export const customModalRef = createRef<CustomModalRefProps>();

const CustomModal = ({ children, onClose }: CustomModalProps) => {
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

  return (
    <GestureDetector gesture={gestureHandler}>
      <Animated.View style={[styles.container, animatedBottomStyle]}>
        <View style={styles.line} />
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
export default CustomModal;
