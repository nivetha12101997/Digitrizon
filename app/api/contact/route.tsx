import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();

  // Create transporter (Example using Gmail - requires App Password)
  const transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      // user: process.env.EMAIL_USER, // Your email
      // pass: process.env.EMAIL_PASS, // Your App Password
      user: 'nivethabe1997@gmail.com',
      pass: 'pskm nzme bkmf odps', // Your App Password

    },
  });

  try {
    await transporter.sendMail({
      // from: data.email,
      from: `"Website Form" <nivethabe1997@gmail.com>`, // Your authenticated email
      to: 'lionelbalaji28@gmail.com',
      replyTo: data.email, // THIS is the important part
      subject: `New Project Request from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.countryCode} ${data.phone}
        Company: ${data.company || 'N/A'}
        Project Type: ${data.projectType}
        Details: ${data.details}
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}