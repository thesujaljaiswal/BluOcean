import React from 'react'

export default function Compbtn4() {
  return (
    <>
     <div className="flex justify-center justify-evenly items-center p-10 px-10">
        <div className='rounded-lg'>
          <img src={require('./e2.png')} alt=''  />
        </div>
        <div className="flex flex-col flex-wrap">
          <div className='flex flex-wrap'>
            <p className='text-2xl'>We source & n acquire Right Talent for you.We headhunt right<br/>fits.We provide you RPO services (Recruitment Process<br/>Outsourcing).</p>
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
            <button className="text-blue-500 border-blue-500 border rounded-lg py-2 px-8">
              Read More
            </button>
          </div>
        </div>
      </div>   
    </>
  )
}
