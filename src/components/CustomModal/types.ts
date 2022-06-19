import type React from 'react';

export interface onCloseModalProps {
  onClose: (status: boolean) => void;
}
export interface CustomModalProps extends onCloseModalProps {
  children: React.ReactNode;
  modalContainerStyle?: object;
}
export interface CustomModalRefProps {
  toggleModal: (isVisible: boolean) => void;
}
