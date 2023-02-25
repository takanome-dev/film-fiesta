import { buildSendMail } from 'mailing-core';
import nodemailer from 'nodemailer';

// import { env } from '@/env/server.mjs';

const transport = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  logger: true,
  debug: true, // include SMTP traffic in the logs
});

const sendMail = buildSendMail({
  transport,
  defaultFrom: 'TAKANOME DEV <takanomedev221@gmail.com>',
  configPath: './mailing.config.json',
});

export default sendMail;
