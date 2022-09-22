require('dotenv').config()
const nodemailer = require("nodemailer");
const express = require('express')
const path = require('node:path')
const cors = require('cors')


//express app
const app = express()


//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000!')
})

//middleware
app.use(express.static(path.join(__dirname, 'frontend/public')));
app.use(express.json());
app.use(cors());

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/public', 'index.html'))});

//post request
app.post('/', async (req, res) => {
console.log(req.body);
const output = `
    <p>You have a new contact request...</p>
    <h3>Contact Details:</h3>
    <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Email Address: ${req.body.email}</li>
        <li>Telephone No: ${req.body.telephone}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.message}</p>
`
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'andykirby.uk@gmail.com',
        pass: process.env.EMAIL_PASS,
    },
    tls:{
        rejectUnauthorized:false
    }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
    from: '"andykirby.co.uk" <andykirby.uk@gmail.com>',
    to: "info@andykirby.co.uk",
    subject: "Contact Request",
    text: "Hello world?",
    html: output,
});

console.log("Message sent: %s", info.messageId);
res.send({sent:'Message sent'})
});