import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import Modal from './Modal'
import { motion } from "framer-motion"



const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <motion.div  whileHover= {{scale: 1.05, textShadow: "0px 0px 8px rgb(255,255,255"}}>
                    <Link to="/" className="logo">Andrew Kirby
                    </Link>
                    </motion.div>
                    <ul>
                        <motion.li
                        whileHover= {{scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255"}}>
                        <NavLink to="/About" className={({isActive}) => isActive ? "is-active": "not-active" }>ABOUT</NavLink>
                        </motion.li>
                        <li>
                        <NavLink to="/About#skills" className={({isActive}) => isActive ? "is-active": "not-active" }>TECHNICAL SKILLS</NavLink>
                        </li>
                        <motion.li
                        whileHover= {{scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255"}}>
                        <NavLink to="/Projects" className={({isActive}) => isActive ? "is-active": "not-active" }>PROJECTS</NavLink>
                        </motion.li>
                        <motion.li
                        whileHover= {{scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255"}}>
                        <NavLink to="/Contact" className={({isActive}) => isActive ? "is-active": "not-active" }>CONTACT</NavLink>
                        </motion.li>
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