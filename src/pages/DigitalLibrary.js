import React from 'react'
import Java from '../components/Category/Java'
import Networking from '../components/Category/Networking'
import ThirdYear from '../components/Category/ThirdYear'

const DigitalLibrary = () => {
  return (
    <div className="mt-24">
       <div className="bg-[#0a101b] my-10 mx-5 rounded-md mb-5">
        <div className="grid grid-cols-7 pt-5">
          <Java />
          <Java />
          <Java />
          <Java />
          <Java />
          <Java />
          <Java />
          <Java />
          <Java />
          <Java />
          <Java />
          <Java />
          <Java />
          <Java />
          
        </div>
      </div>

      <Networking/>
      <ThirdYear/>
    </div>
  )
}

export default DigitalLibrary