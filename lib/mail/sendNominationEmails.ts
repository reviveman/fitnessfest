import nodemailer from "nodemailer";

// ------------------------------------
//  SMTP TRANSPORTER (GMAIL SMTP)
// ------------------------------------
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ------------------------------------
//  NOMINEE THANK YOU TEMPLATE
// ------------------------------------
export function nominationThankYouTemplate(name: string, award: string) {
  return `
    <div style="font-family: Arial; padding: 20px;">
      <h2 style="color:#EA4A3E;">Thank You for Your Nomination, ${name}!</h2>
      <p>Your nomination for <strong>${award}</strong> has been successfully received.</p>
      <p>Our jury committee will carefully review your submission.</p>

      <p>We appreciate your participation!</p>

      <br/>
      <p>Regards,</p>
      <strong>Bengaluru Fitness Festival</strong>
    </div>
  `;
}

// ------------------------------------
//  ADMIN HTML TEMPLATE (PROFESSIONAL)
// ------------------------------------
export function nominationAdminTemplate(values: any) {
  const uploadedFiles = values.uploadedFiles || {};

  const uploadedFilesHTML = Object.entries(uploadedFiles)
    .map(([field, urls]: any) => {
      const links = urls
        .map((url: string) => `<li><a href="${url}" target="_blank">${url}</a></li>`)
        .join("");

      return `
        <tr>
          <td style="padding: 8px; font-weight: bold; vertical-align: top;">${field}</td>
          <td style="padding: 8px;">
            <ul style="margin: 0; padding-left: 18px;">${links}</ul>
          </td>
        </tr>
      `;
    })
    .join("");

  return `
  <div style="font-family: Arial, Helvetica, sans-serif; color: #222; padding: 16px;">

    <h2 style="color:#EA4A3E;">New Nomination Submission</h2>
    <p>A new nomination has been received. Below are the details:</p>

    <br/>

    <table style="width: 100%; border-collapse: collapse;">

      <tr>
        <td style="padding: 8px; font-weight: bold;">Award Title</td>
        <td style="padding: 8px;">${values.awardTitle}</td>
      </tr>

      <tr style="background: #fafafa;">
        <td style="padding: 8px; font-weight: bold;">Name</td>
        <td style="padding: 8px;">${values.fullName}</td>
      </tr>

      <tr>
        <td style="padding: 8px; font-weight: bold;">Email</td>
        <td style="padding: 8px;">${values.email}</td>
      </tr>

      <tr style="background: #fafafa;">
        <td style="padding: 8px; font-weight: bold;">Phone</td>
        <td style="padding: 8px;">${values.contactNumber}</td>
      </tr>

      <tr>
        <td style="padding: 8px; font-weight: bold;">City / Area</td>
        <td style="padding: 8px;">${values.cityArea}</td>
      </tr>

      <tr style="background: #fafafa;">
        <td style="padding: 8px; font-weight: bold;">Designation</td>
        <td style="padding: 8px;">${values.designation}</td>
      </tr>

      <tr>
        <td style="padding: 8px; font-weight: bold;">Gender</td>
        <td style="padding: 8px;">${values.gender}</td>
      </tr>

      <tr style="background: #fafafa;">
        <td style="padding: 8px; font-weight: bold;">Date of Birth</td>
        <td style="padding: 8px;">${values.dateOfBirth}</td>
      </tr>
    </table>

    <br/>

    <h3 style="color:#EA4A3E;">Social Media</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; font-weight: bold;">Instagram</td>
        <td style="padding: 8px;">${values.instagramHandle || "-"}</td>
      </tr>

      <tr style="background:#fafafa;">
        <td style="padding: 8px; font-weight: bold;">Facebook</td>
        <td style="padding: 8px;">${values.facebookPage || "-"}</td>
      </tr>

      <tr>
        <td style="padding: 8px; font-weight: bold;">YouTube / Website</td>
        <td style="padding: 8px;">${values.youtubeWebsite || "-"}</td>
      </tr>

      <tr style="background:#fafafa;">
        <td style="padding: 8px; font-weight: bold;">Media Mentions</td>
        <td style="padding: 8px;">${values.mediaMentions || "-"}</td>
      </tr>
    </table>

    <br/>

    <h3 style="color:#EA4A3E;">Uploaded Files</h3>
    <table style="width: 100%; border-collapse: collapse;">
      ${uploadedFilesHTML}
    </table>

    <br/>

    <p style="font-size: 12px; color:#777;">
      Submitted on: ${new Date().toLocaleString()}
    </p>

  </div>
  `;
}

// ------------------------------------
//  SEND BOTH EMAILS
// ------------------------------------
export async function sendNominationEmails(values: any, fileGroups: Record<string, File[]>) {
  const nomineeEmail = values.email;
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

  // ---------------------------
  // 1️⃣ SEND NOMINEE EMAIL
  // ---------------------------
  await transporter.sendMail({
    from: `"Bengaluru Fitness Fest" <${process.env.EMAIL_USER}>`,
    to: nomineeEmail,
    subject: "🎉 Your Nomination Has Been Received",
    html: nominationThankYouTemplate(values.fullName, values.awardTitle),
  });

  // ---------------------------
  // 2️⃣ SEND ADMIN EMAIL + ATTACHMENTS
  // ---------------------------

  const attachments: any[] = [];

  for (const groupKey of Object.keys(fileGroups)) {
    for (const file of fileGroups[groupKey]) {
      const buffer = Buffer.from(await file.arrayBuffer());

      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }
  }

  await transporter.sendMail({
    from: `"Nomination System" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject: `🏆 New Nomination: ${values.fullName}`,
    html: nominationAdminTemplate(values),
    attachments,
  });

  return { success: true };
}
