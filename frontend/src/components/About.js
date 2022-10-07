import { React } from 'react'
import { Languages1, Languages2, Tools1, Tools2, Software1, Software2 } from './Skill'
import { motion } from "framer-motion"


const About = () => {
    return (
        <motion.div className="about-container" id="top" initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 2}}} exit={{opacity: 0}}>
            <div className="about-left">
                <motion.img className="andykirby" src={require('../assets/images/andykirby.png')} alt={""} initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 0.8}}}></motion.img>
                <div style={{ background: "#dfdfdf", height: "3px", width: "60px", margin: "25px", borderRadius: "6px" }}></div>
                <p className="about-text"><span style={{ color: "#9e9e9e" }}>"</span>Hi! I'm Andy... I am a software & application developer from Leeds. With a drive for <span style={{ color: "#000000"}}>innovation</span> and a <span style={{ color: "#000000"}}>serious passion</span> for code I specialise in
                cross-platform desktop software & web applications as well as iOS & Android mobile application development using the React-Native framework. Always <span style={{ color: "#000000"}}>connected with technology</span> my mission is to create a digital platform delivering tailored & optimised solutions to all challenges.<br></br>
                <br></br>With time permitting I also have a side-line <span style={{ color: "#000000"}}>interest</span> for Python automation and machine learning (AI).<span style={{ color: "#000000" }}>"</span>
                </p>
                <div style={{ background: "#dfdfdf", height: "3px", width: "60px", margin: "25px", borderRadius: "6px" }}></div>
                <div className="signature">Andrew Kirby</div>
                <div className="print-name">- ANDY KIRBY</div>
            </div>
            <div className="about-right" id="skills">
                <div className="tech-title">TECHNICAL SKILLS</div>
                <div style={{ background: "#5a6573", height: "3px", width: "60px", margin: "15px", borderRadius: "6px" }}></div>
                <div className="tech-sub">LANGUAGES:</div>
                <div className='tech-sub-cards'>
                    <Languages1 />
                    <Languages2 />
                </div>
                <div className="tech-sub" style={{ padding: "20px 10px" }}>TOOLS, FRAMEWORKS & LIBRARIES:</div>
                <div className='tech-sub-cards'>
                    <Tools1 />
                    <Tools2 />
                </div>
                <div className="tech-sub">SOFTWARE:</div>
                <div className='tech-sub-cards'>
                    <Software1 />
                    <Software2 />
                </div>
                <div style={{ background: "#5a6573", height: "3px", width: "60px", margin: "30px", borderRadius: "6px" }}></div>
            </div>
        </motion.div>
    )
};


export default About