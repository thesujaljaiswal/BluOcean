import React from 'react'

export default function Compbtn3() {
  return (
    <>
     <div className="flex justify-center justify-evenly items-center p-10 px-10 mine">
        <div className='rounded-lg'>
          <img src={require('./our-vision.png')} alt=''  />
        </div>
        <div className="flex flex-col flex-wrap">
          <div className='flex flex-wrap'>
            <p className='text-2xl'>To be amongst the TOP 3 HR Consultants in all vertical of Human<br/>Resource by delivering cost-effective, ethical, reliable, and high-<br/>quality services by 2025.</p>
          </div>
          <div>
            <p className='text-lg pt-8'>&rarr; Quickly aggregate B2B users.</p>
          </div>
          <div>
            <p className='text-lg pt-3'>&rarr; Appropriately empower dynamic leadership.</p>
          </div>
          <div>
            <p className='text-lg pt-3'>&rarr; Here’s what they have to say about us.</p>
          </div>
          <div className='pt-6'>
            <button className="text-blue-700 border-blue-700 border hover:bg-blue-300 border rounded-lg py-2 px-8">
              Read More
            </button>
          </div>
        </div>
      </div>  
    </>
  )
}
