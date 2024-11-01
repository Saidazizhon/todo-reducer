import React from 'react'

function Modal({children, openModal, setOpenModal}) {
  return (
    <div id='wrapper' onClick={(e) => e.target.id == "wrapper" ? setOpenModal(false) : ""} className={`fixed duration-300 backdrop-blur  inset-0 flex items-center justify-center ${openModal ? "scale-1" : "scale-0"}`}>
      <div className="w-[500px] p-5 bg-zinc-200 rounded-lg">{children}</div>
    </div>
  )
}

export default Modal
