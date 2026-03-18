import nodemailer from "nodemailer";

export async function GET() {
    return Response.json({
        message: "This endpoint accepts POST requests only.",
    });
}

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length === 0) {
        errors.name = "Name is required.";
    } else if (name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters.";
    } else if (name.trim().length > 100) {
        errors.name = "Name must be under 100 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || email.trim().length === 0) {
        errors.email = "Email is required.";
    } else if (!emailRegex.test(email.trim()) || email.length > 254) {
        errors.email = "Enter a valid email address.";
    }

    if (
        !message ||
        typeof message !== "string" ||
        message.trim().length === 0
    ) {
        errors.message = "Message is required.";
    } else if (message.trim().length < 5) {
        errors.message = "Message must be at least 10 characters.";
    } else if (message.trim().length > 2000) {
        errors.message = "Message must be under 2000 characters.";
    }

    if (Object.keys(errors).length > 0) {
        return new Response(
            JSON.stringify({ message: "Validation failed.", errors }),
            {
                status: 400,
            },
        );
    }

    const { NEXT_PUBLIC_USER, NEXT_PUBLIC_PASS } = process.env;

    if (!NEXT_PUBLIC_USER || !NEXT_PUBLIC_PASS) {
        return new Response(
            JSON.stringify({
                message: "Server misconfiguration. Please try again later.",
            }),
            { status: 500 },
        );
    }

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: NEXT_PUBLIC_USER,
            pass: NEXT_PUBLIC_PASS,
        },
    });

    try {
        await transport.sendMail({
            from: email,
            to: NEXT_PUBLIC_USER,
            subject: `Portfolio Contact From ${name.trim()}`,
            text: `Message from ${name.trim()} (${email.trim()}):\n\n${message.trim()}`,
        });

        return Response.json({ message: "success" });
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({ message: "Message could not be sent." }),
            { status: 500 },
        );
    }
}
