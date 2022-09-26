require('dotenv').config()
const nodemailer = require("nodemailer");
const express = require('express')
const path = require('node:path')
const cors = require('cors')


//express app
const app = express()
app.enable('trust proxy')


app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get("/*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
    });

console.log('Testing ENV', process.env.PORT)
//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000!')
})

//middleware
app.use(express.json());
app.use(cors());


//post request
app.post('/', async (req, res) => {
try {
const output = 
    `<p>You have a new contact request...</p>
    <h3>Contact Details:</h3>
    <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Email Address: ${req.body.email}</li>
        <li>Telephone No: ${req.body.telephone}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.message}</p>`

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'andykirby.uk@gmail.com',
        pass: 'ilbokhzkrvslyvtb',
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
res.sendStatus((200))
res.send({sent:'Message sent'})
} catch (error) {
  res.json({error: error.message})
}
});