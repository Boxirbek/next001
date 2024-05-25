import React from 'react'
import Image from 'next/image'
import Carts from "@/assets/women.png"
import Fotter from "@/components/fotter/Fotter";


const Category = () => {
  return (
    <div>
        <div className="top">
              <h1>Business</h1>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />     eiusmod tempor incididunt ut labore.</h5>
              <h3>Blog  Business</h3>
        </div>
        <div className="cards">
             <Image className='cartImg' src={Carts}  />
              <div className="text">
                <h1>Top 6 free website mockup tools 2022</h1>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Non blandit massa enim nec.</h5></div>
          </div> <div className="cards">
              <Image className='cartImg' src={Carts} />
              <div className="text">
                  <h1>Top 6 free website mockup tools 2022</h1>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Non blandit massa enim nec.</h5></div>
          </div> <div className="cards">
              <Image className='cartImg' src={Carts} />
              <div className="text">
                  <h1>Top 6 free website mockup tools 2022</h1>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Non blandit massa enim nec.</h5></div>
          </div> <div className="cards">
              <Image className='cartImg' src={Carts} />
              <div className="text">
                  <h1>Top 6 free website mockup tools 2022</h1>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Non blandit massa enim nec.</h5></div>
          </div> <div className="cards">
              <Image className='cartImg' src={Carts} />
              <div className="text">
                  <h1>Top 6 free website mockup tools 2022</h1>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Non blandit massa enim nec.</h5></div>
          </div>
          <Fotter/>
    </div>
  )
}

export default Category