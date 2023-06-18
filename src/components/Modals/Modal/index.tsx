/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  noCloseBtn?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  noCloseBtn,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [element, setElement] = useState<HTMLDivElement>();

  useEffect(() => {
    setIsClient(true);
    setElement(document.createElement("div"));
  }, []);

  useEffect(() => {
    if (isOpen && isClient && element) {
      const modalRoot = document.getElementById("modal-root");

      if (modalRoot) {
        modalRoot.appendChild(element);
        document.body.style.overflow = "hidden";

        return () => {
          modalRoot.removeChild(element);
          document.body.style.overflow = "auto";
        };
      }
    }
  }, [isOpen, isClient, element]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isClient) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isClient, handleKeyDown]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !isClient || !element) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-75"
        onClick={handleOverlayClick}
      ></div>

      <div className="bg-white rounded-lg p-4 shadow-lg z-10">
        {!noCloseBtn && (
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <AiOutlineCloseCircle className="h-6 w-6" />
          </button>
        )}

        {children}
      </div>
    </div>,
    element
  );
};

export default Modal;
