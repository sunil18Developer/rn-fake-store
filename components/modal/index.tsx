import React from "react";
import { Modal, ModalProps, View } from "react-native";

interface IProps extends ModalProps {
  visible: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<IProps> = (props) => {
  return (
    <Modal
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      transparent
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      {props.children}
    </Modal>
  );
};

export default ModalComponent;
