'use client'

import ReactLoading from 'react-loading'

export default function Loading(){
  return(
    <div className='flex-col justify-center items-center'> 
    <div className='flex justify-center'>

    <ReactLoading  />
    </div>
    <h2>Please wait to load...</h2>
    </div>
  )
}