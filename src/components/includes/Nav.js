import React from 'react'
import { Link } from 'react-router-dom'


import { FaSearchDollar , FaRegBell , FaHome , FaRegSun , FaRegUser   } from "react-icons/fa";


function Nav() {
    return (
        <nav className="blocks">
                        <Link to='/'>
            <a href="#" className="block">
                    <div className="block__item">
                    <FaHome fill='white' />

                    </div>
                </a>
            </Link>
            <Link to='/searchproject'>
            <a href="#" className="block">
                    <div className="block__item">
                    <FaSearchDollar fill='white' />

                    </div>
                </a>
            </Link>
            <Link to='/notifications'>
            <a href="#" className="block">
                    <div className="block__item">
                    <FaRegBell fill='white' />

                    </div>
                </a>
            </Link>
            <Link to='/setting'>
            <a href="#" className="block">
                    <div className="block__item">
                    <FaRegSun  fill='white' />

                    </div>
                </a>
            </Link>

            <Link to='/auth'>
            <a href="#" className="block">
                    <div className="block__item">
                    <FaRegUser  fill='white' />

                    </div>
                </a>
            </Link>
        </nav>

    )
}

export default Nav
