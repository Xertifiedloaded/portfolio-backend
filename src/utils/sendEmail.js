const sendEmail = async (transporter, { name, email, subject, message }) => {
  try {
    await transporter.sendMail({
      from: email,
      to: "certifiedloaded@gmail.com",
      subject: subject,
      text: message,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
