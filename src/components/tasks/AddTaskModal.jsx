import { useForm } from "react-hook-form";
import Modal from "./../../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const onCancel = () => {
        reset();
        setIsOpen(false)
    }

    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data)=> {
        console.log(data);
        onCancel();
    }
   
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Nothing to write">
<form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-col gap-1 mt-4">
        <label className="font-semibold" htmlFor="title">Title:</label>
        <input className="w-full rounded text-blue-600" type="text" id="title" placeholder="Title Please" {...register('title')} />
    </div>
    <div className="flex flex-col gap-1 mt-3">
        <label className="font-semibold" htmlFor="description">Description:</label>
        <textarea className="w-full rounded text-blue-600" type="text" id="description" placeholder="Description Please" {...register('description')} />
    </div>

    <div className="flex flex-col gap-1 mt-3">
        <label className="font-semibold" htmlFor="date">Date:</label>
        <input className="w-full rounded text-blue-600" type="date" id="date" placeholder="Date Please" {...register('date')} />
    </div>

    <div className="flex flex-col gap-1 mt-3">
        <label className="font-semibold" htmlFor="Select Person">Asign To:</label>
        <select className="w-full rounded text-blue-600" id="assignedTo" placeholder="Select Please" {...register('assignedTo')} >
<option value="John Doe">John Do</option>
<option value="Tomas Loo">Tomas Loo</option>

        </select>
    </div>

    <div className="flex flex-col gap-1 mt-3">
        <label className="font-semibold" htmlFor="Select Priority">Priority:</label>
        <select className="w-full rounded text-blue-600" id="priority" placeholder="Select Please" {...register('priority')} >
        
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>

        </select>
    </div>
   <div className="flex justify-end gap-4 mt-6">
   <button onClick={()=>onCancel()} className="btn btn-danger" type="button">Cancel</button>
   <button className="btn btn-primary" type="submit">Submit</button>
   </div>
</form>
    </Modal>
  );
};

export default AddTaskModal;
