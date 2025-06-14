import { useEffect } from "react";
import { ModalProps } from "../types";
import { modalStyles } from "../styles";
import { motion, AnimatePresence } from "framer-motion";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={modalStyles.overlay} onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`${modalStyles.container} ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={modalStyles.header}>
              <h2 className={modalStyles.title}>{title}</h2>
              <button onClick={onClose} className={modalStyles.closeButton}>
                ×
              </button>
            </div>
            <div className="p-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
