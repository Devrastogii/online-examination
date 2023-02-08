import React from 'react'

const Footer = () => {
  function designClasses(){
      let classes = "bg-sky-600 text-white w-40 h-8 border-none font-semibold ml-2 hover:bg-blue-600";
      return classes;
  }

  function clearResponse(){

  }

  function review(){

  }

  function dump(){

  }

  function next(){

  }

  return (
    <>
         <div className='flex flex-row h-16 w-4/5 ml-1 border-b items-center border-gray-300'>
            <button className="bg-sky-600 text-white w-36 h-8 border-none font-semibold ml-2 hover:bg-blue-600 text-sm" onClick={clearResponse}>CLEAR RESPONSE</button>
            <button className="bg-sky-600 text-white w-36 h-8 border-none font-semibold ml-2 hover:bg-blue-600 text-sm" onClick={review}>REVIEW</button>
            <button className="bg-sky-600 text-white w-36 h-8 border-none font-semibold ml-2 hover:bg-blue-600 text-sm" onClick={dump}>DUMP</button>
            <button className="bg-sky-600 text-white w-36 h-8 border-none font-semibold ml-2 hover:bg-blue-600 text-sm">PREVIOUS</button>
            <button className="bg-sky-600 text-white w-36 h-8 border-none font-semibold ml-2 hover:bg-blue-600 text-sm" onClick={next}>NEXT</button>
        </div>

        <div className='flex justify-center items-center text-white bg-gray-500'>
            &copy; Dev Rastogi
        </div>
    </>
  )
}

export default Footer
