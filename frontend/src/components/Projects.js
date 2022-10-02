import { motion } from "framer-motion"

const Projects = () => {
    return (
        <motion.div className="project-container" initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 2}}} exit={{opacity: 0}}>
            <h2>Coming Soon...</h2>
        </motion.div>
    )
}

export default Projects