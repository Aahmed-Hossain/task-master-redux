import { useForm } from "react-hook-form";
import Modal from "./../../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data)=> {
        console.log(data);
    }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Nothing to write">
<form onSubmit={handleSubmit(onSubmit)}>
    <div>
        
    </div>
    <button type="submit">Submit</button>
</form>
    </Modal>
  );
};

export default AddTaskModal;
