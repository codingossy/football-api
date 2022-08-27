import React from 'react'

const Navbar = () => {
  return (
    <nav className='capitalize hidden lg:flex'>
    <ul className='flex items-center space-x-12 text-white'>
      <li className='nav-link hover:text-red-500'><a href="#">leagues</a></li>
      <li className='nav-link hover:text-red-500'><a href="#">top scorers</a></li>
      <li className='nav-link hover:text-red-500'><a href="#">schedules</a></li>
      <li className='nav-link hover:text-red-500'><a href="#">news</a></li>
      <li className='nav-link hover:text-red-500'><a href="#">contact</a></li>
    </ul> 
</nav>
  )
}

export default Navbar