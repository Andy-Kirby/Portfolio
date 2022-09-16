import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'


const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence >
        { showModal && (
            <motion.div className="modal-blur">
                <motion.div className="modal-background"
                initial={{y: -500 }}
                animate={{ y: 0 }}
                exit={{ y: -500 }}
                transition={{ duration: 0.9, type: 'spring' }}
                >
                    <ul className="modal-links">
                        <li>
                        <HashLink to="/About#" className={"modal-links"} onClick={()=> setShowModal(!showModal)}>ABOUT ➞</HashLink>
                        </li>
                        <div style={{ background: "#dfdfdf", height: "2px", width: "220px", margin: "20px" }}></div>
                        <li>
                        <HashLink to={"/About#skills"} className={"modal-links"} onClick={()=> setShowModal(!showModal)}>TECHNICAL SKILLS ➞</HashLink>
                        </li>
                        <div style={{ background: "#dfdfdf", height: "2px", width: "220px", margin: "20px" }}></div>
                        <li>
                        <NavLink to="/Projects" className={"modal-links"} onClick={()=> setShowModal(!showModal)}>PROJECTS ➞</NavLink>
                        </li>
                        <div style={{ background: "#dfdfdf", height: "2px", width: "220px", margin: "20px" }}></div>
                        <li>
                        <NavLink to="/Contact" className={"modal-links"} onClick={()=> setShowModal(!showModal)}>CONTACT ➞</NavLink>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    )
}

export default Modal