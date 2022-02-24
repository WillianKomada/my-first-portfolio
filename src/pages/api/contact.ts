import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';

const email = process.env.MAIL_ADDRESS;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
);

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const { name, senderMail, content } = request.body;

    if (!name.trim() || !senderMail.trim() || !content.trim()) {
      return response.status(403).send('');
    }

    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `<p><b>E-mail:</b> ${senderMail} <br /> <b>Mensagem:</b> ${content}</p>`,
      replyTo: senderMail
    };

    transporter.sendMail(message);

    return response.send('');
  } catch (err) {
    return response.json({
      error: true,
      message: err.message
    });
  }
};
