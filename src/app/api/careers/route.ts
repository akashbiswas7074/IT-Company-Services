import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const status = formData.get('status') as string;
    const experience = formData.get('experience') as string;
    const details = formData.get('details') as string;
    const file = formData.get('file') as File | null;

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions: any = {
      from: process.env.SMTP_USER,
      to: process.env.CAREER_EMAIL || 'careers@example.com',
      subject: 'New Job Application',
      html: `
        <h2>New Job Application</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Apply For:</strong> ${status}</li>
          <li><strong>Experience:</strong> ${experience} Yrs.</li>
          <li><strong>Other Details:</strong> ${details}</li>
        </ul>
      `,
    };

    // Attach resume file if provided
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      mailOptions.attachments = [
        {
          filename: file.name,
          content: buffer,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error sending application:', error);
    return NextResponse.json({ success: false, message: 'Failed to submit application' }, { status: 500 });
  }
}