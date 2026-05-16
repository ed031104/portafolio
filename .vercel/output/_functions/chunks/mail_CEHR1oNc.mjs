import { readFileSync } from 'fs';
import require$$2 from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename$1 = fileURLToPath(import.meta.url);
const __dirname$1 = require$$2.dirname(__filename$1);
const templatePath = require$$2.resolve(__dirname$1, "../assets/TemplateEmail.html");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: Number("587"),
  secure: false,
  auth: {
    user: "edwin.noviembre.0306@gmail.com",
    pass: "vzzk bwuo iieq ojjz"
  }
});
async function sendEmail(contact, email, message) {
  try {
    console.log("Sending email with the following details:");
    const template = readFileSync(templatePath, "utf8").replace("@contact", contact).replace("@emailcontact", email).replace("@message", message);
    console.log("Email template generated successfully.");
    console.log("Email details:", { contact, email, message });
    await transporter.sendMail({
      from: "edwin.noviembre.0306@gmail.com",
      to: "edwindavila031104@gmail.com",
      subject: "Nuevo contacto de Portfolio",
      html: template
    });
    console.log("Email sent successfully.");
  } catch (error) {
    throw new Error("Failed to send email");
  }
}

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();
    await sendEmail(name, email, message);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
