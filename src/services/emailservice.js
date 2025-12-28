import { mailTransporter } from "../config/mail.js";
import dotenv from "dotenv";
dotenv.config();


export const sendAutoReply = async (to, data) => {
  return mailTransporter.sendMail({
    from: `"Support" <${process.env.GMAIL_USER}>`,
    to,
    subject: "Thank you for contacting us",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden;">

          <!-- IMAGE / LOGO -->
          <img src="http://localhost:3000/assets/Weblogo.png"
               alt="Company Banner"
               style="width: 100%; max-height: 200px; object-fit: cover;">

          <div style="padding: 20px;">
            <h2 style="color: #333;">Hello ${data.name || ""},</h2>

            <p style="font-size: 15px; color: #555;">
              Thanks for reaching out! We’ve received your message and our team will contact you shortly.
            </p>

            <div style="background: #f8f8f8; padding: 15px; border-left: 4px solid #007bff;">
              <strong>Your message:</strong>
              <p style="white-space: pre-wrap;">${data.message || ""}</p>
            </div>

            <p style="color: #555; margin-top: 20px;">
              If this wasn’t you, please ignore this email.
            </p>

            <p style="margin-top: 20px; font-size: 14px; color: #777;">
              — Support Team
            </p>
          </div>
        </div>
      </div>
    `,
  });
};


export const forwardToOwner = async (data) => {
  return mailTransporter.sendMail({
    from: `"Form Bot" <${process.env.GMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: `New Form Submission from ${data.name || "Unknown"}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
        <div style="max-width: 650px; margin: auto; background: white; border-radius: 8px; overflow: hidden;">

          <!-- IMAGE / LOGO -->
          <img src="http://localhost:3000/assets/Weblogo.png"
              alt="Submission Banner"
              style="width: 100%; max-height: 180px; object-fit: cover;">

          <div style="padding: 20px;">
            <h2 style="color: #333;">New Contact Form Submission</h2>

            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name || "-"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email || "-"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone || "-"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Country:</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.country || "-"}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; background: #f8f8f8; padding: 15px; border-left: 4px solid #28a745;">
              <strong>Message:</strong>
              <p style="white-space: pre-wrap;">${data.message || ""}</p>
            </div>
          </div>
        </div>
      </div>
    `,
  });
};


export const sendBookingAutoReply = async (to, data) => {
  return mailTransporter.sendMail({
    from: `"Support" <${process.env.GMAIL_USER}>`,
    to,
    subject: "Your Booking Request is Received",
    html: `
      <h2>Hi ${data.name},</h2>
      <p>Your booking request has been received.</p>

      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>
      <p><strong>Topic:</strong> ${data.topic}</p>

      <p>We will confirm shortly.</p>
      <p>— Support Team</p>
    `
  });
};

export const forwardBookingToOwner = async (data) => {
  return mailTransporter.sendMail({
    from: `"Booking Bot" <${process.env.GMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: `New Booking from ${data.name}`,
    html: `
      <h2>New Booking Request</h2>

      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>
      <p><strong>Topic:</strong> ${data.topic}</p>

      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  });
};
