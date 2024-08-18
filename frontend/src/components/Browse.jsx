import React from 'react'
import Job from './Job';
import Navbar from './shared/Navbar';

function Browse() {
    const randomJob=[1,2,3];

  return (
    <div>
        <Navbar />
       <div className='max-w-6xl mx-auto my-10'>
       <h1 className='text-lg font-bold my-10'>Search Result {randomJob.length}</h1>
        <div className="grid grid-cols-3 gap-5">
            {randomJob.map((item,index)=>(
                <Job />
            ))}
        </div>
       </div>
    </div>
  )
}

export default Browse