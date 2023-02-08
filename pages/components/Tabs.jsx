import React from 'react'

const Tabs = () => {
  return (
    <>
        <div className='flex flex-row h-16 border-t border-b items-center border-gray-300'>
            <button className='bg-sky-600 text-white w-40 h-8 border-none font-semibold mr-2 ml-2 hover:bg-sky-700'>ALL SECTIONS</button>
            <button className='bg-sky-600 text-white w-40 h-8 border-none font-semibold mr-2 hover:bg-sky-700'>PHYSICS</button>
            <button className='bg-sky-600 text-white w-40 h-8 border-none font-semibold mr-2 hover:bg-sky-700'>CHEMISTRY</button>
            <button className='bg-sky-600 text-white w-40 h-8 border-none font-semibold hover:bg-sky-700'>MATHS</button>
        </div>
    </>
  )
}

export default Tabs
