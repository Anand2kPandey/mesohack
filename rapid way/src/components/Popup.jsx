import React, {useState} from 'react';
import Modal from 'react-modal';
import AnimeList from './Anime';


function ModalInFunctionalComponent (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
            <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>

            <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <AnimeList/>
            </Modal>
        </>
    )
}

export default ModalInFunctionalComponent;

