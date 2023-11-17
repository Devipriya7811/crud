import { useState } from 'react';


import "./App.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";

function App ()  {
  const [modalOpen, setModalOpen] = useState(false);
  return (
  <div className="App">
  <Table/>
  <button className='btn' onClick={() => setModalOpen(true)}>Add Product</button>
  {modalOpen && <Modal closeModel ={() => {
    setModalOpen(false)
  }}/>}
  </div>  );
}

export default App;