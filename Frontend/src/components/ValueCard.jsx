import React from 'react'
import "../App.css"

const ValueCard = ({img, title, description}) => {
  return (
   <>
        <div className="bg-white rounded-md shadow-md md:p-4 p-2 md:w-[18rem] hover:shadow-xl hover:scale-110 duration-300">
            <div className="text-center">
                    <img src={img} alt="" className='w-20 mx-auto'/>
                    <h4 className='md:text-xl textbase font-semibold bg-gradient-to-r from-violet-700 via-orange-600 to-blue-800 inline-block text-transparent bg-clip-text my-3'>{title}</h4>
                <p className="text-base">{description}</p>
            </div>
          
        </div>
   </>
  )
}

export default ValueCard