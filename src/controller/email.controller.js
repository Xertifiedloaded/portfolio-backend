import Contact from "../Schema/email.js";
import { successResMsg } from "../middleware/errorHandler.js";
import sendEmail from "../utils/sendEmail.js";
import emailTransporter from "../utils/EmailTransporter.js";

const submitContactForm = async (req, res) => {
  try {

    const { name, email, subject, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });
    const transporter = emailTransporter();
    await sendEmail(transporter, { name, email, subject, message });
    await newContact.save();
    successResMsg(res,201,{message:"Contact form submitted successfully",newContact})
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'An error occurred while submitting the contact form' });
  }
};

export { submitContactForm };
