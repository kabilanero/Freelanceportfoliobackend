import { Router } from "express";
import { contactForm, handleBookingForm } from "../controllers/contactform.js";

const router = Router();

// POST /api/forms/contact
router.post("/contact", contactForm);
router.post("/booking", handleBookingForm);


export default router;
