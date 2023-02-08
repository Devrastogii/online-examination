import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { UserContext } from '../Context';
import stimage from '../images/stimage.png'

const Panel = () => {       

    const { color } = useContext(UserContext);
    const {done, notVisited, not, reviewWithAns, reviewWithout, dump} = useContext(UserContext);

  return (
    <>        
            <div className='flex flex-row border w-60 bg-teal-100'>
                <div>
                    <Image src={stimage} className="w-20" />
                </div>
                <div className='flex flex-col justify-center ml-2 items-center text-sm font-semibold'>
                    <div className='-ml-3'>Time Left: 02:39:29</div>
                    <div>Name: Ashish Kumar</div>
                </div>
            </div>

            <div className='flex flex-col mt-5 bg-teal-100 h-60 border border-gray-400'>
                <div className='text-white bg-sky-600'>&nbsp;Question Pallete</div>
                <div className='mt-1'>
                    <button className={`border ${color} w-11 ml-2 mt-2 h-9`}>1</button>
                    <button className='border bg-white w-11 h-9'>2</button>
                    <button className='border bg-white w-11 h-9'>3</button>
                    <button className='border bg-white w-11 h-9'>4</button>
                    <button className='border bg-white w-11 h-9'>5</button> <br />
                    <button className='border bg-white w-11 h-9 ml-2'>6</button>
                    <button className='border bg-white w-11 h-9'>7</button>
                    <button className='border bg-white w-11 h-9'>8</button>
                    <button className='border bg-white w-11 h-9'>9</button>
                    <button className='border bg-white w-11 h-9'>10</button>
                </div>
            </div>

            <div className='flex flex-col mt-3 bg-teal-100 h-auto border border-gray-400'>
                <div className='text-white bg-sky-600'>&nbsp;Legend (Click to view)</div>
                <div className='text-center'>
                    <button className='border bg-green-500 w-28 mt-2 h-7 text-sm'>{done} Answer</button>
                    <button className='border bg-red-500 w-28
                     h-7 text-sm'>{not} No Answer</button> <br />
                    <button className='border bg-purple-500 w-28
                     h-7 text-sm'>{reviewWithAns} Review+Ans</button>
                    <button className='border bg-yellow-300 w-28
                     h-7 text-sm'>{reviewWithout} Review-Ans</button> <br />
                    <button className='border bg-gray-300 w-28
                     h-7 text-sm'>{dump} Dump</button>
                    <button className='border bg-white w-28
                     h-7 text-sm'>{notVisited} No Visit</button>                    
                </div>

                <div className='flex justify-center bg-sky-600 mt-2 mb-2'>10 All Questions</div>

                <div className='w-full border-white border h-2'></div>

                <div className='flex flex-row justify-between px-6 w-full'>
                    <button className='bg-sky-600 text-white w-20 h-8 rounded-md hover:bg-sky-700'>Profile</button>
                    <button className='bg-sky-600 text-white w-20 h-8 rounded-md hover:bg-sky-700'>Instr</button>
                </div>

                <div className='flex flex-row justify-between px-6 w-full mt-2 mb-5'>
                    <button className='bg-sky-600 text-white w-20 h-8 rounded-md hover:bg-sky-700'>Questions</button>
                    <button className='bg-sky-600 text-white w-20 h-8 rounded-md hover:bg-sky-700'>Submit</button>
                </div>
            </div>
    </>
  )
}

export default Panel
