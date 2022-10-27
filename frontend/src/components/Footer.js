import Email from '../assets/images/email.svg'
import Github from '../assets/images/github.svg'
import Instagram from '../assets/images/instagram.svg'
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <motion.div className="footer-container" initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 2}}} exit={{opacity: 0}}>
            <div style={{ fontSize: "1rem", color: "#ebebeb", marginTop: "45px" }}>GET IN TOUCH</div>
            <div style={{ backgroundColor: "#aaaaaa", height: "1px", width: "60px", margin: "20px"}}></div>
            <div className="icon-container">
                <motion.a href="https://www.instagram.com/andykirby.co.uk" className="contact-instagram" whileHover= {{scale: 1.2}}><img src={ Instagram } id="instagram-btn" alt=""></img></motion.a>
                <motion.a href="https://github.com/Andy-Kirby" className="contact-github" whileHover= {{scale: 1.2}}><img src={ Github } id="github-btn" alt=""></img></motion.a>
                <motion.a href="mailto:info@andykirby.co.uk" className="contact-mail" whileHover= {{scale: 1.2}}><img src={ Email } id="mail-btn" alt=""></img></motion.a>
            </div>
            <div style={{ margin: "25px" }}className="copyright">© 2022 ANDREW KIRBY. All Rights Reserved. </div>
        </motion.div>
    )
}

export default Footer