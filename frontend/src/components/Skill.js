import React from 'react'
import icons from '../assets/icons/icons'
import { motion } from "framer-motion"

const Languages1 = () => {
    return (
        <React.Fragment>
            <motion.div className='language1'
                initial={{ x: "35vw" }}
                whileInView={{ x: "0" }}
                viewport={{ once: true }}
                transition={{duration: 2, type: "spring", delay: 0.5}}>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.python } alt={""}></img>
                    <div className="skill-name">Python</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.javascript } alt={""}></img>
                    <div className="skill-name">Javascript</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.sql } alt={""}></img>
                    <div className="skill-name">(no)SQL</div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}
const Languages2 = () => {
    return (
        <React.Fragment>
            <motion.div className='language1'
                initial={{ x: "22vw" }}
                whileInView={{ x: "0" }}
                viewport={{ once: true }}
                transition={{duration: 2, type: "spring", delay: 0.5}}>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.html } alt={""}></img>
                    <div className="skill-name">HTML5</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.css } alt={""}></img>
                    <div className="skill-name">CSS</div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}
const Tools1 = () => {
    return (
        <React.Fragment>
            <motion.div className='language1'
                initial={{ x: "35vw" }}
                whileInView={{ x: "0" }}
                viewport={{ once: true }}
                transition={{duration: 2, type: "spring", delay: 0.5}}>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.react } alt={""}></img>
                    <div className="skill-name">React-Native</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.react } alt={""}></img>
                    <div className="skill-name">ReactJS</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.node } alt={""}></img>
                    <div className="skill-name">NodeJS</div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}
const Tools2 = () => {
    return (
        <React.Fragment>
            <motion.div className='language1'
                initial={{ x: "22vw" }}
                whileInView={{ x: "0" }}
                viewport={{ once: true }}
                transition={{duration: 2, type: "spring", delay: 0.5}}>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.express } alt={""}></img>
                    <div className="skill-name">Express API</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.pyqt5 } alt={""}></img>
                    <div className="skill-name">PyQT5</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.github } alt={""}></img>
                    <div className="skill-name">GitHub</div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}
const Software1 = () => {
    return (
        <React.Fragment>
            <motion.div className='language1'
                initial={{ x: "35vw" }}
                whileInView={{ x: "0" }}
                viewport={{ once: true }}
                transition={{duration: 2, type: "spring", delay: 0.5}}>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.apple } alt={""}></img>
                    <div className="skill-name">MacOS</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.windows } alt={""}></img>
                    <div className="skill-name">Windows</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.vscode } alt={""}></img>
                    <div className="skill-name">VS Code</div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}
const Software2 = () => {
    return (
        <React.Fragment>
            <motion.div className='language1'
                initial={{ x: "22vw" }}
                whileInView={{ x: "0" }}
                viewport={{ once: true }}
                transition={{duration: 2, type: "spring", delay: 0.5}}>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.linux } alt={""}></img>
                    <div className="skill-name">Linux</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.sublime } alt={""}></img>
                    <div className="skill-name">Sublime Text</div>
                </div>
                <div className="skill-card">
                    <img className="skill-svg" src={ icons.adobe } alt={""}></img>
                    <div className="skill-name">Adobe XD</div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}
export { Languages1, Languages2, Tools1, Tools2, Software1, Software2 }