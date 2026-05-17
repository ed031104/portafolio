import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatePath = path.resolve(__dirname, "../assets/TemplateEmail.html");

const transporter = nodemailer.createTransport({
  host: import.meta.env.host ?? process.env.host,
  port: Number(import.meta.env.port ?? process.env.port),
  secure: (import.meta.env.secure ?? process.env.secure) === "true",
  auth: {
    user: import.meta.env.user ?? process.env.user,
    pass: import.meta.env.password ?? process.env.password,
  },
});

export async function sendEmail(
  contact: string,
  email: string,
  message: string,
) {
  try {
    console.log("Sending email with the following details:");
    const template = readFileSync(templatePath, "utf8")
      .replace("@contact", contact)
      .replace("@emailcontact", email)
      .replace("@message", message);

    console.log("Email template generated successfully.");
    console.log("Email details:", { contact, email, message });
    await transporter.sendMail({
      from: import.meta.env.user ?? process.env.user,
      to: import.meta.env.to ?? process.env.to,
      subject: "Nuevo contacto de Portfolio",
      html: template,
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email", { cause: error });
  }
}
