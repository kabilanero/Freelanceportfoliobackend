import dotenv from "dotenv";
dotenv.config();   // <--- ADD THIS
 import nodemailer from "nodemailer";

export const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,        // keep this
  secure: false,    // true only if you switch to port 465
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

