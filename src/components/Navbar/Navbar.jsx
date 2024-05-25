import React from 'react'
import "./Navbar.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <div className="navHead">
    <div className="navHeadL">
<Link className='logo' href={'/'}>Finsweet</Link>
    </div>
    <div className="navHeadR">
                  <Link className='navLink' href={'/'}>Home</Link>
                  <Link className='navLink' href={'/category'}>Category</Link>
                  <Link className='navLink' href={'/login'}>Login</Link>
                  <button>READ MORE</button>
    </div>
        </div>
        <div className="navBottom">
              <h1 className='navTitle'>Step-by-step guide to choosing <br /> great font pairs</h1>
              <h5  >By James West  |  May 23, 2022 </h5>
              <h5  >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h5>
              <button>READ MORE</button>
        </div>
    </div>
  )
}

export default Navbar