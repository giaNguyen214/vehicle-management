import { useState } from "react";
import './modalStyle.css'

const ModalUpdate = ({ show, handleClose, currentValue, handleUpdate }) => {
    const [updatedValue, setUpdatedValue] = useState(currentValue);
  
    const handleChange = (e) => {
      setUpdatedValue(e.target.value);
    };
  
    const handleSubmit = () => {
      handleUpdate(updatedValue);
      handleClose();
    };
  
    return (
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main">
          <h2>Update Value</h2>
          <input type="text" value={updatedValue} onChange={handleChange} />
          <button onClick={handleSubmit}>Update</button>
          <button onClick={handleClose}>Cancel</button>
        </section>
      </div>
    );
  };

export default ModalUpdate;