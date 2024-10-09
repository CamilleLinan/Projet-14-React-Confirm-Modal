import React from 'react';
import { Button, Modal } from 'antd';
import '../styles/main.scss';

interface ConfirmModalProps {
  visible: boolean;
  title?: string;
  content?: string;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  title = 'Confirmation',
  content = 'Êtes-vous sûr de vouloir continuer ?',
  onConfirm,
}) => {
  return (
    <Modal
      title={title}
      open={visible}
      footer={[
        <Button key="ok" type="primary" onClick={onConfirm}>
          OK
        </Button>
      ]}
      onCancel={onConfirm}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default ConfirmModal;
