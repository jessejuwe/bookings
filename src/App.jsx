import { useContext } from 'react';

import Header from './components/layout/Header';

import Modal from './components/UI/Modal';
import Backdrop from './components/UI/Backdrop';

import Information from './components/Information/Information';
import PaymentForm from './components/PaymentForm/PaymentForm';
import Summary from './components/Summary/Summary';
import Payment from './components/Payment/Payment';

import ModalContext from './context/modal-context';
import CardProvider from './context/CardProvider';

import './App.css';

const App = () => {
  const ctx = useContext(ModalContext);

  const openModalHandler = () => ctx.openModal();
  const closeModalHandler = () => ctx.closeModal();

  return (
    <CardProvider>
      {ctx.modalIsOpen && <Backdrop show closed={closeModalHandler} />}
      <Header onShowModal={openModalHandler} />
      <hr />
      <Modal show={ctx.modalIsOpen} closed={closeModalHandler} />
      <div className="sect">
        <Information />
        <br />
        <PaymentForm />
      </div>
      <hr />
      <Summary />
      <hr />
      <Payment />
    </CardProvider>
  );
};

export default App;
