import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'


const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence >
        { showModal && (
            <motion.div className="modal-blur">
                <motion.div className="modal-background"
                initial={{y: -800 }}
                animate={{ y: -10 }}
                exit={{ y: -800 }}
                transition={{ duration: 0.9, type: 'spring' }}
                >
                    <ul className="modal-links">
                        <li>
                        <HashLink to="/About#" className={"modal-link"} onClick={()=> setShowModal(!showModal)}>ABOUT <div style={{margin: "0px 0px 5px 50px"}}>➞</div></HashLink>
                        </li>
                        <div style={{ background: "#dfdfdf", height: "2px", width: "220px", margin: "10px" }}></div>
                        <li>
                        <HashLink to={"/About#skills"} className={"modal-link"} onClick={()=> setShowModal(!showModal)}>TECHNICAL SKILLS <div style={{margin: "0px 0px 5px 50px"}}>➞</div></HashLink>
                        </li>
                        <div style={{ background: "#dfdfdf", height: "2px", width: "220px", margin: "10px" }}></div>
                        <li>
                        <NavLink to="/Projects" className={"modal-link"} onClick={()=> setShowModal(!showModal)}>PROJECTS <div style={{margin: "0px 0px 5px 50px"}}>➞</div></NavLink>
                        </li>
                        <div style={{ background: "#dfdfdf", height: "2px", width: "220px", margin: "10px" }}></div>
                        <li>
                        <NavLink to="/Contact" className={"modal-link"} onClick={()=> setShowModal(!showModal)}>CONTACT <div style={{margin: "0px 0px 5px 50px"}}>➞</div></NavLink>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    )
}

export default Modal