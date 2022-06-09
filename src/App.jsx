import { useState } from 'react';

import Header from './components/layout/Header';

import Modal from './components/UI/Modal';
import Backdrop from './components/UI/Backdrop';

import Information from './components/Information/Information';
import PaymentForm from './components/PaymentForm/PaymentForm';
import Summary from './components/Summary/Summary';
import Payment from './components/Payment/Payment';

import './App.css';
import ModalProvider from './context/ModalProvider';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModalHandler = () => setModalIsOpen(true);
  const closeModalHandler = () => setModalIsOpen(false);

  return (
    <ModalProvider>
      {modalIsOpen && <Backdrop show closed={closeModalHandler} />}
      <Header onShowModal={openModalHandler} />
      <hr />
      <Modal show={modalIsOpen} closed={closeModalHandler} />
      <div className="sect">
        <Information />
        <PaymentForm />
      </div>
      <hr />
      <Summary />
      <hr />
      <Payment />
    </ModalProvider>
  );
};

export default App;
