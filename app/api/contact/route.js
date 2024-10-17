import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the JSON data from the request body
    const body= await request.json();
console.log(body)
    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: body.email, // Use environment variable for email
        pass: process.env.GMAIL_PASS, // Use environment variable for email password
      },
    });

    let mailOptions = {
      from: body.email, // Sender address (from the form input)
      to: process.env.MY_EMAIL, // List of receivers
      subject: 'New Client Request', // Subject line
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`, // Plain text body
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
