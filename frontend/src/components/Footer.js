import Email from '../assets/images/email.svg'
import Github from '../assets/images/github.svg'
import Instagram from '../assets/images/instagram.svg'

const Footer = () => {
    return (
        <div className="footer-container">
            <div style={{ fontSize: "1rem", color: "#ffffff", marginTop: "45px" }}>GET IN TOUCH</div>
            <div style={{ backgroundColor: "#aaaaaa", height: "1px", width: "60px", margin: "20px"}}></div>
            <div className="icon-container">
                <a href="https://www.instagram.com/andykirby.uk" className="contact-instagram"><img src={ Instagram } id="instagram-btn" alt=""></img></a>
                <a href="https://github.com/Andy-Kirby" className="contact-github"><img src={ Github } id="github-btn" alt=""></img></a>
                <a href="mailto:info@andykirby.co.uk" className="contact-mail"><img src={ Email } id="mail-btn" alt=""></img></a>
            </div>
            <div style={{ padding: "25px" }}className="copyright">ANDREW KIRBY ©2022&emsp;&#8226;&emsp;Powered by Digital Ocean&emsp;&#8226;&emsp;<a href="./admin">ADMIN</a></div>
        </div>
    )
}

export default Footer