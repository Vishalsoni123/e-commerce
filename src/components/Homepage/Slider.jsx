import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import { useCallback, useEffect, useState } from 'react'
import './Slider.css'

function Slider() {
  const [number, setnumber] = useState(1)

  const handlenext = () => {
    if (number===images.length-1) {
      setnumber(0)
    }
    else{
      setnumber(number+1)
    }

  }
  const handleprev = () => {
    if (number === 0) {
      setnumber(images.length-1)
    }
    else{
      setnumber(number-1)
    }
  }
  const images = [
    { id: 1, src: 'https://cdn.pixabay.com/photo/2015/01/21/13/21/special-offer-606691_1280.png' },
    { id: 2, src: 'https://cdn.pixabay.com/photo/2020/05/31/19/55/cyber-5244009_640.png' },
    { id: 3, src: 'https://cdn.pixabay.com/photo/2018/01/07/17/37/discount-3067847_640.png' },
    { id: 4, src: 'https://cdn.pixabay.com/photo/2022/05/21/05/16/promotion-7210696_640.png' },
    { id: 5, src: 'https://cdn.pixabay.com/photo/2024/03/27/20/33/ai-generated-8659898_640.jpg' },
  ];


  useEffect(() => {
    setTimeout(() => {
      handlenext()

    }, 2000)
  })


  return (
    <>
      <div className='Slider-container'>

        <div className='sliderimg'><img src={images[number].src} /></div>
        <div >
           {/* <button onClick={handlenext} className='buttonn-1'><GrPrevious /></button><br />
          <button onClick={handleprev} className='buttonn-2'><MdNavigateNext /></button>  */}
        </div>
      </div>

    </>
  )
}

export default Slider
