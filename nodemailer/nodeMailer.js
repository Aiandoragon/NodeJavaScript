const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'aiyana.dibbert@ethereal.email',
        pass: 'bgq3mzwZp49nUZrdMW'
    }
    
},
)

const mailer = massage => {
    transporter.sendMail(massage, (err,info) => {
        if(err) return console.log(err)
        console.log('Email sent: '. info)
    })
}

module.exports = mailer