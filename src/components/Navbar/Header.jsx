import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import { HiMenu } from 'react-icons/hi';
import { MdSportsFootball } from 'react-icons/md';




const Header = ( {setNavMobile}) => {
  return (
    <header className='py-6 bg-bggg bg-cover bg-bottom bg-no-repeat text-white'>

        <div className='mx-auto container '>

            <div className='flex items-center justify-between'>

            <a href="/"><MdSportsFootball size={30}/></a>
            




        <Navbar  />

        {/* mobile nav */}
        <HiMenu onClick={() => setNavMobile(true)} className='lg:hidden text-3xl text-white cursor-pointer'/>
            {/* mobile nav ends */}


            </div>

        </div>

    </header>
  )
}

export default Header