import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";




const Fotter = () => {
  return (
    <div className='fotter'>
        <div className="fotL">
              <h5>Finstreet 118 2561 Fintown</h5>
              <h5>Hello@finsweet.com  020 7993 2905</h5>
        </div>
        <div className="fotR">
              <FaLinkedin/>
              <FaFacebook/>
              <FaInstagram/>
              <FiTwitter/>
        </div>
    </div>
  )
}

export default Fotter