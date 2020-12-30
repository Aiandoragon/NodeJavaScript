const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')

const app = express()

const PORT = 3000
data = undefined

app.use(bodyParser.urlencoded({extended: false}))
app.post('/mail',(req,res) => {
    if(!req.body) return res.sendStatus(400)
    //console.log(req.body)
    const message = {
        from: 'Mailer',
        to: 'aiyana.dibbert@ethereal.email',
        subject: 'New Message',
        text:`Name:${req.body.name}\nMessage:${req.body.mail}`
    }
    mailer(message)
    data = req.body
    res.redirect('/mail')
})
app.get('/mail',(req,res) => {
    if(typeof data !== 'object') return res.sendFile(__dirname + '/mail.html')
    res.send('Сообщение отправлено')
    data = undefined
})

app.listen(PORT, () => console.log(`server listening at http://127.0.0.1:${PORT}/mail`))