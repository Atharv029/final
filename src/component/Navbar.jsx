import React from 'react'

const Navbar = () => {
  return (

    <div className="navbar z-0">
     <a href="#home"><li>Home</li>  </a>
      <a href="#ser">Service</a>
     <a href="https://online.publuu.com/556425/1250886" target='blank'> <li>Resume</li></a> 
     <a href="#Project"><li>Portfolio</li>  </a> 
      <a href="#Abouts"><li>About</li> </a>
      <div className="contact font-bold">
        <a href="https://wa.me/9892467712" target='blank'>Contact Us</a>
      </div>
      <div className='logo'><img src="src\assets\photo_6318869767389298229_x-removebg-preview.png" alt="" className=' w-48 ' /></div>

    </div>

  )
}

export default Navbar