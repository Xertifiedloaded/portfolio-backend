import nodemailer from 'nodemailer';
import env from 'dotenv'
env.config()
const emailTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_CONNECTED_TO,
      pass: process.env.PASSWORD_OF_EMAIL_CONNECTED_TO
    }
  });
};

export default emailTransporter;
