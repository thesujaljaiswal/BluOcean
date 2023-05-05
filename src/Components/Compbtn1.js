import React from 'react'

export default function Compbtn1() {
  return (
    <>
     <div className="flex justify-center justify-evenly items-center p-10 mine">
        <div>
          <img src={require('./our-mission.png')} alt='' />
        </div>
        <div className="flex flex-col flex-wrap">
          <div className='flex flex-wrap'>
            <p className='text-3xl'>To provide unique solutions and to transform<br/>“Challenges into Possibilities”.</p>
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
            <button className="text-blue-700 border-blue-700 border hover:bg-blue-300 rounded-lg py-2 px-8">
              Read More
            </button>
          </div>
        </div>
      </div> 
    </>
  )
}
