import { useState, ReactNode } from "react";

interface ModalState {
  isVisible: boolean;
  title?: string;
  content?: ReactNode;
  overlay?: boolean;
  callbackOnClose?: () => void;
}

const useModal = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isVisible: false,
    title: "",
    content: null,
    overlay: false,
    callbackOnClose: () => {},
  });

  const openModal = (title: string, content: ReactNode, overlay: boolean, callbackOnClose: () => void) => {
    setModalState({ isVisible: true, title, content, overlay, callbackOnClose});
  };

  const closeModal = () => {
    setModalState({ isVisible: false, title: "", content: null, overlay: true, callbackOnClose: () => {} });
  };

  return {
    isVisible: modalState.isVisible,
    title: modalState.title,
    content: modalState.content,
    overlay: modalState.overlay,
    callbackOnClose: modalState.callbackOnClose,
    openModal,
    closeModal,
  };
};

export default useModal;