import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="main-landing">DESIGN,<br></br>ENGINEERING & DEVELOPMENT</div>
            <div style={{ background: "#dfdfdf", height: "3px", width: "60px", borderRadius: "6px" }}></div>
            <div className="hi-landing">Hi, I'm Andy Kirby... I am a software & application developer from Leeds, UK.</div>
            <Link to="/about" style={{width: '50px'}}>
                <motion.button className="lets-go"
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: 'spring'}}
                >TAKE A LOOK</motion.button>
            </Link>
        </div>
        
    )
}

export default Landing