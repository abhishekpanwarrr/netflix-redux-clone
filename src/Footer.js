import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
           {/* <h3>Questions? Call 000-800-040-1843</h3> */}
           <div className='footer__container'>
               <div className='footer__containerLeft'>
                   <ul>
                       <li>FAQ</li>
                       <li>Investor Relations</li>
                       <li>Privacy</li>
                       <li>Speed Test</li>
                   </ul>
               </div>
               <div className='footer__containerMiddle'>
                    <ul>
                       <li>Help Centre</li>
                       <li>Jobs</li>
                       <li>Cookie Preferences</li>
                       <li>Legal Notices</li>
                   </ul>
               </div>
               <div className='footer__containerRight'>
                    <ul>
                       <li>Account</li>
                       <li>Ways to Watch</li>
                       <li>Corporate Information</li>
                       <li>Netflix Originals</li>
                    </ul>
               </div>
               <div className='footer__containerRight-1'>
                    <ul>
                       <li>Media Centre</li>
                       <li>Terms of use</li>
                       <li>Contact us</li>
                       {/* <li>Netflix Originals</li> */}
                    </ul>
               </div>
           </div>
           <p>Copyright @ 2021 Abhishek</p>
        </div>
    )
}

export default Footer
