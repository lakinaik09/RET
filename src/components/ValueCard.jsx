import React from 'react'
import "../App.css"

const ValueCard = ({img, title, description}) => {
  return (
   <>
   <div className='card-wrapper'>
        <div className="card-content">
            <div className="front-side flex flex-col text-center">
                    <img src={img} alt="" className='md:w-40 w-32 mx-auto'/>
                    <h4 className='md:text-xl font-semibold text-white mt-4'>{title}</h4>
            </div>
            <div className="back-side md:p-4">
                <p className="md:text-xl text-base">{description}</p>
            </div>
        </div>
   </div>
   </>
  )
}

export default ValueCard