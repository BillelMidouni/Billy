import { useState, ReactNode } from "react";

interface ModalState {
  isVisible: boolean;
  title?: string;
  content?: ReactNode;
  overlay?: boolean;
}

const useModal = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isVisible: false,
    title: "",
    content: null,
    overlay: false,
  });

  const openModal = (title: string, content: ReactNode, overlay: boolean) => {
    setModalState({ isVisible: true, title, content, overlay });
  };

  const closeModal = () => {
    setModalState({ isVisible: false, title: "", content: null, overlay: true });
  };

  return {
    isVisible: modalState.isVisible,
    title: modalState.title,
    content: modalState.content,
    overlay: modalState.overlay,
    openModal,
    closeModal,
  };
};

export default useModal;