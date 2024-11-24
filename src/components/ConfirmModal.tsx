import React, { ReactNode } from 'react';
import { Button, Modal } from 'antd';
import '../styles/main.scss';

export interface ButtonProps {
  text: string | ReactNode;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | undefined;
  onClick?: () => void;
}

export interface ConfirmModalProps {
  visible: boolean;
  title?: string | ReactNode;
  content?: string | ReactNode;
  footerButtons?: ButtonProps[];
  onConfirm?: () => void;
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
