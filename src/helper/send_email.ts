"use server";

import "dotenv/config";
import { configDotenv } from "dotenv";
import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/smtp-transport";

/// !TODO
configDotenv({ path: [".env"] });

//============================================
//
//============================================
export async function sendEmailHelper(params: MailOptions) {
  return await nodemailer
    .createTestAccount()
    .then(async (val) => {
      const nodeEnv = process.env.NODE_ENV;
      const nodeEnvIsProd = nodeEnv === "production";

      //============================================
      //
      //============================================
      params.from = process.env.SENDER_IDENTITIES;
      const transporter = nodemailer.createTransport({
        secure: process.env.SECURE === "true",
        host: nodeEnvIsProd ? process.env.HOST : val.smtp.host,
        port: nodeEnvIsProd ? Number(process.env.SMTP_PORT) : val.smtp.port,
        auth: {
          user: nodeEnvIsProd ? process.env.USER : val.user,
          pass: nodeEnvIsProd ? process.env.PASS : val.pass,
        },
      });

      //============================================
      //
      //============================================
      return await transporter
        .sendMail(params)
        .then((val) => {
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(val));
          return val;
        })
        .catch((err) => {
          throw err;
        });
    })
    .catch((err) => {
      throw err;
    });
}

//=============================================
// DOC: https://www.nodemailer.com/
// Test SMTP SERVICE: https://ethereal.email/
//=============================================
