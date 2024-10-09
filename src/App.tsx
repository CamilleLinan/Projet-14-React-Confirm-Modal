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
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default App
