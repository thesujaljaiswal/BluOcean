import React from 'react'

export default function Belowcarousel() {
  return (
    <>
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">WHO WE ARE
        <br class="hidden lg:inline-block"/>BLUOCEAN PRIVATE LIMITED
      </h1>
      <p class="mb-8 leading-relaxed">Blu Ocean is a world leader in innovative workforce solutions. Blu Ocean India provides end to end Human Resource Management to organizations and helps them address their critical talent needs by providing comprehensive Workforce Management from Recruitment Process Outsourcing (RPO) to Staffing Solutions, Permanent Recruitment and Leadership Training and Development. Our endeavor is to help our clients and candidates win in the changing world of work.

Our firm enthusiastically performs its work in acceptance to cater your manpower necessities, procuring the candidate with the desired profile and building trusting relationships. Owing to our industry expertise, we comprehend that firm’s today have need of more than an able candidate; they reach for employees who are productive, exhibit a positive attitude and have the ability to become a member of their team.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className='rounded-xl' src={require("./seaport.jpg")} alt="seaport" />
    </div>
  </div>
</section>
    </div>
    </>
  )
}
