import { Button } from "../Button";
import { BackGroundModal, Modal } from "./styles";

export const AddModal = ({ children, titleModal, onClick }) => {
   
  return (
    <BackGroundModal>
      <Modal>
        <div>
            <h1>{titleModal}</h1>
            <Button type={"button"} onClick={onClick} name={"X"}/>
        </div>
        {children}
      </Modal>
    </BackGroundModal>
  );
};
