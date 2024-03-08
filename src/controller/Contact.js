import emailTransporter from "../utils/emailTransporters.js";
import sendEmail from "../utils/sendEmail.js";

const transporter = emailTransporter();

sendEmail(transporter);
