import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/ratelimit";

// ✅ Escape HTML to prevent injection
function escapeHTML(str: string) {
  return str.replace(/[&<>"']/g, (char) => {
    const escapeMap: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return escapeMap[char] || char;
  });
}

// ✅ Email validation regex
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    // ✅ Get real client IP (important for Vercel/proxies)
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    // ✅ Rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const data = await req.json();

    // ✅ Required field validation
    if (!data.name || !data.email || !data.details) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Email format validation
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // ✅ ENV validation
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    // ✅ Sanitize inputs
    const name = escapeHTML(data.name);
    const email = escapeHTML(data.email);
    const phone = escapeHTML(`${data.countryCode || ""} ${data.phone || ""}`);
    const company = escapeHTML(data.company || "N/A");
    const projectType = escapeHTML(data.projectType || "N/A");
    const details = escapeHTML(data.details);

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000, // prevent hanging
    });

    // ✅ Admin Email Template
    const adminTemplate = `
      <div style="font-family: Arial; padding: 20px;">
        <h2>New Client Request</h2>
        <hr/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Details:</strong><br/> ${details}</p>
      </div>
    `;

    // ✅ Send mail to YOU (admin)
    await transporter.sendMail({
      from: `"${name} via Digitrizon" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // safer than hardcoding
      replyTo: email,
      subject: `New Project Request from ${name}`,
      html: adminTemplate,
    });

    // ✅ Auto-response to CLIENT
    await transporter.sendMail({
      from: `"Digitrizon Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your request 🚀",
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>Hi ${name},</h2>
          <p>Thanks for reaching out to <strong>Digitrizon</strong>.</p>
          <p>We’ve received your request and will get back to you shortly.</p>
          <br/>
          <p>Best regards,<br/>Digitrizon Team</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("MAIL ERROR:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}