import { createTransport } from "nodemailer";

export const sendMail = async (text) => {
  const transporter = createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_USER,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  //look into forgot password n your old proejct
  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    to: process.env.SMPT_MAIL,
    from: process.env.SMPT_MAIL,
    text,
  });
};
