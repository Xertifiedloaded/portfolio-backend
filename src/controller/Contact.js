import emailTransporter from '../utils/EmailTransporter.js';
import sendEmail from '../utils/sendEmail.js';
import { formData } from '../utils/formData.js';

const transporter = emailTransporter();

sendEmail(transporter);