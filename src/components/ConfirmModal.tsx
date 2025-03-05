import React, { ReactNode } from 'react';
import { Button, Modal } from 'antd';

export interface ButtonProps {
  text: ReactNode;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  onClick?: () => void;
}

export interface ConfirmModalProps {
  open: boolean;
  title?: ReactNode;
  content?: ReactNode;
  footerButtons?: ButtonProps[];
  onConfirm?: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  title,
  content,
  footerButtons = [],
  onConfirm,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      footer={footerButtons.map((btn, index) => (
        <Button key={index} type={btn.type} onClick={btn.onClick}>
          {btn.text}
        </Button>
      ))}
      onOk={onConfirm}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmModal;
