import { useCallback } from 'react';
import { Keyboard } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Metrics, verticalScale } from '../../../theme';
import type { onCloseModalProps } from './../types';

const TOP_LIMIT = -Metrics.screenHeight + verticalScale(55);

const useCustomModal = ({ onClose }: onCloseModalProps) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const onDragToEnd = useCallback(() => {
    onClose(false);
  }, [onClose]);

  const toggleModal = useCallback(
    (isVisible: boolean) => {
      translateY.value = withSpring(isVisible ? TOP_LIMIT : 0, {
        damping: 550,
      });
    },
    [translateY]
  );

  const gestureHandler = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, TOP_LIMIT);
    })
    .onEnd(() => {
      if (translateY.value > -Metrics.screenHeight / 1.5) {
        translateY.value = withSpring(0, { damping: 50 });
        runOnJS(onDragToEnd)();
        runOnJS(Keyboard.dismiss)();
      } else if (translateY.value < -Metrics.screenHeight / 1.5) {
        translateY.value = withSpring(TOP_LIMIT, { damping: 50 });
      }
    });

  const animatedBottomStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [TOP_LIMIT + 50, TOP_LIMIT],
      [25, 5],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY: translateY.value }],
      borderRadius,
    };
  });

  return {
    toggleModal,
    gestureHandler,
    animatedBottomStyle,
  };
};

export default useCustomModal;
