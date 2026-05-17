import template from "../assets/TemplateEmail.html?raw";
import nodemailer from "nodemailer";


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
    const templateEmail = template
      .replace("@contact", contact)
      .replace("@emailcontact", email)
      .replace("@message", message);

    console.log("Email template generated successfully.");
    console.log("Email details:", { contact, email, message });
    await transporter.sendMail({
      from: import.meta.env.user ?? process.env.user,
      to: import.meta.env.to ?? process.env.to,
      subject: "Nuevo contacto de Portfolio",
      html: templateEmail,
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email", { cause: error });
  }
}
