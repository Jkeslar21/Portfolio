import React from 'react'
import { Link } from 'react-scroll'


export default function Navigation() {
    return (
        <>
        <div className='nav-items'>
            <Link 
                activeClass='active'
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-125}
             ><span className='nav-item'>Skills</span></Link>
             <Link 
                activeClass='active'
                to="portfolio"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-125}
             ><span className='nav-item'>Portfolio</span></Link>
             <Link 
                activeClass='active'
                to="resume"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-125}
             ><span className='nav-item'>Resume</span></Link>
             <Link 
                activeClass='active'
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-125}
             ><span className='nav-item'>Contact</span></Link>
        </div>
        <style jsx>{`
                .nav-items {
                    display: flex;
                    justify-content: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 9999;
                    width: 100%;
                    padding: 1%;
                    color: #b7b5b3;
                    background-color: #1f2a44;
                    border-bottom: 2px solid #b7b5b3;
                }
                .nav-item {
                    margin-right: 50px;
                    letter-spacing: 2px;
                    font-family: 'Raleway', sans-serif;
                }
                .nav-item:hover {
                    border-bottom: 1px solid #4ad5ff;
                    cursor: pointer;
                    color: #e5e7e6;
                    font-family: 'Raleway', sans-serif;
                }
                .active {
                    border-bottom: 1px solid #4ad5ff !important;
                }
      `}</style>
        </>
    )
}
