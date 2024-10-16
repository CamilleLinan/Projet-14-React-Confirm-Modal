import React from 'react';
import { Button, Modal } from 'antd';
import '../styles/main.scss';

interface ButtonProps {
  text: string;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | undefined;
  onClick: () => void;
}

interface ConfirmModalProps {
  visible: boolean;
  title?: string;
  content?: string;
  footerButtons?: ButtonProps[];
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  title,
  content,
  footerButtons = [],
  onConfirm,
}) => {
  return (
    <Modal
      title={title}
      open={visible}
      footer={footerButtons.map((btn, index) => (
        <Button key={index} type={btn.type} onClick={btn.onClick}>
          {btn.text}
        </Button>
      ))}
      onCancel={onConfirm}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmModal;
