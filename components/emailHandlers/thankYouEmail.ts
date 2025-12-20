const EVENT_NAME = process.env.EVENT_NAME || "Bengaluru Fitness Festival";
const EVENT_DATE = process.env.EVENT_DATE || "March 28-29, 2026";
const EVENT_WEBSITE =
  process.env.EVENT_WEBSITE || "https://www.fitnessfest.in/";
const EVENT_EMAIL = process.env.EVENT_EMAIL || "info@fitnessfest.in";

export const ThankYouEmailHandler = ({
  name,
  event,
}: {
  name: string;
  event: string;
}) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registration Confirmed - ${EVENT_NAME}</title>
</head>

<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:'Segoe UI',Tahoma,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
          style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.08);">

          <!-- Banner -->
          <tr>
            <td>
              <img
                src="https://res.cloudinary.com/dlkuk7rok/image/upload/v1758083354/fitness_banner_gax5tv.jpg"
                alt="Fitness Fest"
                style="width:100%;display:block;"
              />
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:40px 30px;text-align:center;color:#1e1e1e;">
              <p><strong>Hey ${name.split(" ")[0]},</strong></p>

              <p>
                Your registration for  
                <strong style="color:#EA4A3E;">${event}</strong>  
                at <strong>${EVENT_NAME}</strong> is confirmed 🎉
              </p>

              <p>
                Event Date:  
                <strong style="color:#fdb714;">${EVENT_DATE}</strong>
              </p>

              <p>
                Payment was successful.  
                We look forward to seeing you 💪
              </p>

              <div style="margin:30px 0;padding:20px;background:#fff6e0;border-left:4px solid #fdb714;border-radius:8px;">
                Visit our
                <a href="${EVENT_WEBSITE}" style="color:#00214d;font-weight:600;text-decoration:none;">
                  website
                </a>
                for schedule & updates.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f5f5f5;padding:30px;text-align:center;">
              <p style="font-weight:700;color:#EA4A3E;">${EVENT_NAME}</p>
              <p>
                <a href="${EVENT_WEBSITE}" style="color:#fdb714;text-decoration:none;">
                  ${EVENT_WEBSITE}
                </a>
              </p>

              <p style="font-size:14px;color:#666;">
                Queries:
                <a href="mailto:${EVENT_EMAIL}" style="color:#EA4A3E;">
                  ${EVENT_EMAIL}
                </a>
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#EA4A3E;padding:20px;text-align:center;color:#fff;font-size:12px;">
              © 2026 ${EVENT_NAME}. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};
