import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Landing = () => {
    return (
        <motion.div className="landing-container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <motion.div className="main-landing"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2}}
            >DESIGN,<br></br>ENGINEERING &<br></br>DEVELOPMENT</motion.div>
            <motion.div style={{ background: "#dfdfdf", height: "3px", width: "60px", borderRadius: "6px" }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 1}}></motion.div>
            <motion.div className="hi-landing"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5, duration: 1}}
            >Hi, I'm Andy Kirby... I am a software &<br></br>application developer from Leeds, UK.</motion.div>
            <motion.img className="macbook" src={require('../assets/images/macbook.png')} alt={""}
                initial={{x: 700}}
                animate={{x: 0}}
                transition={{duration: 2, type: "spring"}}
                ></motion.img>
            <Link className="lets-go-link" to="/about" style={{width: '0px'}}>
                <motion.button className="lets-go"
                animate={{scale: 1.05}}
                transition={{duration: 0.8, repeat: Infinity}}
                // whileHover={{scale: 1.1}}
                >TAKE A LOOK</motion.button>
            </Link>
        </motion.div>
        
    )
}

export default Landing