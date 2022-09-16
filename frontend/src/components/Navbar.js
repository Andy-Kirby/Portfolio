import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Modal from './Modal'



const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <Link to="/">
                        <img className="logo" src={ Logo } alt={""}></img>
                    </Link>
                    <ul>
                        <li>
                        <NavLink to="/About" className={({isActive}) => isActive ? "is-active": "not-active" }>ABOUT</NavLink>
                        </li>
                        <li>
                        <NavLink to="/About#skills" className={({isActive}) => isActive ? "is-active": "not-active" }>TECHNICAL SKILLS</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Projects" className={({isActive}) => isActive ? "is-active": "not-active" }>PROJECTS</NavLink>
                        </li>
                        <li>
                        <NavLink to="/Contact" className={({isActive}) => isActive ? "is-active": "not-active" }>CONTACT</NavLink>
                        </li>
                    </ul>
                    <div className={showModal ? "center open": "center" } type="checkbox" onClick={() => setShowModal(!showModal)}>
                        <div></div>
                    </div>
                </div>
                
            </header>
            <div className='modal-container'>
                <Modal showModal={showModal}
                       setShowModal={setShowModal}/>
            </div>
        </React.Fragment>
    )
}



export default Navbar