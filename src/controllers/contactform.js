import { forwardBookingToOwner, forwardToOwner, sendAutoReply, sendBookingAutoReply } from "../services/emailservice.js";

export const contactForm = async (req, res) => {
  const data = req.body;

  if (!data.email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await sendAutoReply(data.email, data);
    await forwardToOwner(data);

    res.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email failed" });
  }
}

export const handleBookingForm = async (req, res) => {
  try {
    const data = req.body;

    // Send auto reply to client
    await sendBookingAutoReply(data.email, data);

    // Forward to owner
    await forwardBookingToOwner(data);

    return res.json({ success: true, message: "Booking request sent successfully!" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Booking email failed" });
  }
};