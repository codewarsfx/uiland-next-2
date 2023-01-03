import {  useState } from "react"

const useModal = ()=>{
    const [isModalopen,setShowModal] = useState(false)
    const [modalSaveImage,setModalSaveImage] = useState(false)
    const toggleModal = () => {
       setShowModal(showModal => !showModal)
     
    }
    const newtoggleModal = () => {
        setShowModal(showModal => !showModal)
      
     }


    return  {modalSaveImage,isModalopen,toggleModal,newtoggleModal}

}


export default useModal