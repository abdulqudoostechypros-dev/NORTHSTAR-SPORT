import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ message: "All fields are required." }, { status: 400 });
    }

    const adminEmail = process.env.ADMIN_EMAIL || "php.techypros@gmail.com";
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return Response.json(
        { message: "Email is not configured for this environment. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, and ADMIN_EMAIL." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `Northstar Sport <${smtpUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #132238;">
          <h2 style="margin-bottom: 12px;">New enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { message: "Unable to send enquiry. Please check your SMTP configuration." },
      { status: 500 }
    );
  }
}
