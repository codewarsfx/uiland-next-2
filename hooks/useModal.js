import {  useState } from "react"

const useModal = ()=>{
    const [isModalopen,setShowModal] = useState(false)
    const [isModalLogin,setIsModalLogin] = useState(false)
    const [modalSaveImage,setModalSaveImage] = useState(false)
   
    const toggleModal = () => {
       setShowModal(showModal => !showModal)
     
    }
    const newtoggleModal = () => {
        setModalSaveImage(showModal => !showModal)
      
     }
     const loginToggleModal = () => {
        setIsModalLogin(showModal => !showModal)
      
     }

    return  {modalSaveImage,isModalopen,toggleModal,newtoggleModal, loginToggleModal,isModalLogin}

}


export default useModal