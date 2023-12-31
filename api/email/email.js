import nodemailer from "nodemailer";
const emailProcessing = async (emaiinfo, resend) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: process.env.newPort,
      credentials: "",
      secure: false, // `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.Email,
        pass: process.env.Password,
      },
    });

    const info = await transporter.sendMail(emaiinfo);
    const resendinfo = await transporter.sendMail(resend);
    console.log("Message sent: %s", info.messageId);
    console.log("Message sent: %s", resendinfo.messageId);
  } catch (error) {}
};

// async..await is not allowed in global scope, must use a wrapper
export const adminSignupEmail = async ({ email, name, message }) => {
  try {
    // send mail with defined transport object
    let info = {
      from: `${email}`,
      to: `${process.env.Email}`, // list of receivers
      subject: `From ${email} ${name}`, // Subject line
      text: message,
      html: `<b>${message}</b>`, // html body
    };
    let secinfo = {
      from: `Nimesh Bista<$${process.env.Email}>`,
      to: `${email}`, // list of receivers
      subject: `Auto Generated mail `, // Subject line
      text: `Hi ${name}, Thank you for your Email. I have recived your email and will be touch soon. Thank you`,
      html: `<b>Hi ${name},</b> 
      <p>Thank you for your Email. I have recived your email and will be touch soon. Thank you</P? 
      <p></P>
      <p></P>
      <p></P>
      <p></P>
      <p></P>
      Thank you
      <p></P>
      Nimesh Bista
      `, // html body
    };

    emailProcessing(info, secinfo);
  } catch (error) {
    console.log(error);
  }
};
