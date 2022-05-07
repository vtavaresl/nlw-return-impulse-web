import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "64994eaea91926",
    pass: "c9fe3e90df879e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equip Feedget <oi@feedget.com>',
      to: 'Vitor Tavares <vtavaresl@hotmail.com>',
      subject,
      html: body,
    });
  };
}