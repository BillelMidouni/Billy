import useModal from "@/core/hooks/useModal";
import React, { createContext, useContext } from "react";
import SlideModal from "./SlideModal";

interface ModalContextProps {
  openModal: (title: string, content: React.ReactNode, overlay: boolean, callbackOnClose: () => void) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isVisible, title, content, overlay, callbackOnClose, openModal, closeModal } = useModal();

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <SlideModal isVisible={isVisible} overlay={overlay} title={title} onClose={() => closeModal()} callbackOnClose={callbackOnClose as () => void}>
        {content}
      </SlideModal>
    </ModalContext.Provider>
  );
};

export const useGlobalModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useGlobalModal must be used within a ModalProvider");
  }
  return context;
};