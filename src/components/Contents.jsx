import React, { useState } from 'react'
import Leagues from './Leagues'
import Standings from './Standings'


const Contents = () => {
  const [active, setActive] = useState(true);

  return (
    <section className='w-full min-h-[80vh] bg-slate-100 text-center'>

      <div className='flex flex-col items-center'>

        <div className='w-full flex items-center justify-center m-5 capitalize px-5 lg:px-0 '>

            <div className='w-[300px] h-12 flex items-center justify-center bg-black text-white text-center cursor-pointer border-r border-gray-500' onClick={() => setActive(true)} >
            <h2 style={{ color: active ? "#c20114" : null }}>Leagues</h2>
            </div>
            
            <div  className='w-[300px] bg-black h-12 text-white text-center cursor-pointer flex items-center justify-center' onClick={() => setActive(false)}>
            <h2 style={{ color: !active ? "#c20114" : null }}>Standings</h2>
            </div>

            </div>
        
        </div>

        {active ? <Leagues /> : <Standings />}

    </section>
  )
}

export default Contents