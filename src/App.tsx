import { FC, useState } from "react"
import ConfirmModal from "./components/ConfirmModal";

const App:FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleConfirm = () => {
    setModalVisible(false);
    console.log("Confirmation OK!");
  };

  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Afficher la modal</button>
      <ConfirmModal
        visible={modalVisible}
        title="Confirm"
        content="Are you sure to confirm?"
        footerButtons={[
          {
            text: 'OK',
            type: 'primary',
            onClick: handleConfirm
          },
          {
            text: 'Annuler',
            type: 'default',
            onClick: () => setModalVisible(false)
          },
          {
            text: 'Autre action',
            type: 'dashed',
            onClick: () => alert('Autre action effectuée !')
          },
        ]}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default App
