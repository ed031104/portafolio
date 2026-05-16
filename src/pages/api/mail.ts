import type { APIRoute } from "astro";
import { sendEmail } from "../../services/mail.service";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const { name, email, message } = await request.json();
        await sendEmail(name, email, message);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), { status: 500 });
    }
};