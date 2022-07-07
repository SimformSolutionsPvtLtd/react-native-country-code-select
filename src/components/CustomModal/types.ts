import type React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface onCloseModalProps {
  onClose: (status: boolean) => void;
}
export interface CustomModalProps extends onCloseModalProps {
  children: React.ReactNode;
  modalContainerStyle?: StyleProp<ViewStyle>;
}
export interface CustomModalRefProps {
  toggleModal: (isVisible: boolean) => void;
}
