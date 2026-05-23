// Email notification service using Resend
// This provides the structure for email notifications
// To enable: Set RESEND_API_KEY in environment variables

interface EmailNotification {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(notification: EmailNotification): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set. Email notifications disabled.');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'EPCX Deployment <deployments@epcx.site>',
        to: notification.to,
        subject: notification.subject,
        html: notification.html,
        text: notification.text,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Resend API error: ${error}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Send notification to admin about new deployment request
export async function sendAdminNotification(lead: {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectType: string;
  workforceSize: string;
  message?: string;
  preferredContactMethod: string;
  currentSystem?: string;
  deploymentTimeline?: string;
}): Promise<{ success: boolean; error?: string }> {
  const adminEmail = process.env.ADMIN_EMAIL || 'madhu@epcx.site';
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h1 style="color: #84cc16; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">
          New Deployment Request
        </h1>
        <p style="color: #a0a0a0; margin: 10px 0 0 0; font-size: 14px;">
          EPCX Industrial Operations Platform
        </p>
      </div>
      
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #84cc16; padding-bottom: 10px;">
          Lead Information
        </h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #666; display: block; margin-bottom: 5px;">Name:</strong>
          <span style="color: #333;">${lead.name}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #666; display: block; margin-bottom: 5px;">Company:</strong>
          <span style="color: #333;">${lead.company}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #666; display: block; margin-bottom: 5px;">Email:</strong>
          <a href="mailto:${lead.email}" style="color: #84cc16; text-decoration: none;">${lead.email}</a>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #666; display: block; margin-bottom: 5px;">Phone:</strong>
          <a href="tel:${lead.phone}" style="color: #84cc16; text-decoration: none;">${lead.phone}</a>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #666; display: block; margin-bottom: 5px;">Preferred Contact Method:</strong>
          <span style="color: #333; text-transform: capitalize;">${lead.preferredContactMethod}</span>
        </div>
      </div>
      
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #84cc16; padding-bottom: 10px;">
          Project Details
        </h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #666; display: block; margin-bottom: 5px;">Project Type:</strong>
          <span style="color: #333;">${lead.projectType}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #666; display: block; margin-bottom: 5px;">Workforce Size:</strong>
          <span style="color: #333;">${lead.workforceSize}</span>
        </div>
        
        ${lead.currentSystem ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #666; display: block; margin-bottom: 5px;">Current System:</strong>
          <span style="color: #333;">${lead.currentSystem}</span>
        </div>
        ` : ''}
        
        ${lead.deploymentTimeline ? `
        <div style="margin-bottom: 15px;">
          <strong style="color: #666; display: block; margin-bottom: 5px;">Deployment Timeline:</strong>
          <span style="color: #333;">${lead.deploymentTimeline}</span>
        </div>
        ` : ''}
      </div>
      
      ${lead.message ? `
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #84cc16; padding-bottom: 10px;">
          Additional Message
        </h2>
        <p style="color: #333; line-height: 1.6; margin: 0;">${lead.message}</p>
      </div>
      ` : ''}
      
      <div style="text-align: center; margin-top: 30px;">
        <a href="https://epcx.site/admin/leads" style="display: inline-block; background: #84cc16; color: #1a1a1a; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
          View in Admin Dashboard
        </a>
      </div>
      
      <p style="text-align: center; color: #999; font-size: 12px; margin-top: 30px;">
        This is an automated notification from the EPCX deployment request system.
      </p>
    </div>
  `;

  return sendEmail({
    to: adminEmail,
    subject: `New Deployment Request: ${lead.company} - ${lead.name}`,
    html,
    text: `New deployment request from ${lead.name} at ${lead.company}. Project: ${lead.projectType}, Workforce: ${lead.workforceSize}. Contact: ${lead.email}, ${lead.phone}.`,
  });
}

// Send confirmation email to the user
export async function sendUserConfirmation(lead: {
  name: string;
  email: string;
}): Promise<{ success: boolean; error?: string }> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h1 style="color: #84cc16; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">
          Request Received
        </h1>
        <p style="color: #a0a0a0; margin: 10px 0 0 0; font-size: 14px;">
          EPCX Industrial Operations Platform
        </p>
      </div>
      
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <p style="color: #333; line-height: 1.6; margin: 0 0 15px 0; font-size: 16px;">
          Dear ${lead.name},
        </p>
        <p style="color: #333; line-height: 1.6; margin: 0 0 15px 0;">
          Thank you for your interest in deploying EPCX for your industrial operations. We have received your deployment request and our team will contact you within 24 hours.
        </p>
        <p style="color: #333; line-height: 1.6; margin: 0;">
          In the meantime, if you have any urgent questions, please feel free to reach out to us directly:
        </p>
        <ul style="color: #333; line-height: 1.8; margin: 15px 0; padding-left: 20px;">
          <li>Email: <a href="mailto:madhu@epcx.site" style="color: #84cc16; text-decoration: none;">madhu@epcx.site</a></li>
          <li>Phone: <a href="tel:+918369532599" style="color: #84cc16; text-decoration: none;">+91 83695 32599</a></li>
        </ul>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <a href="https://epcx.site" style="display: inline-block; background: #84cc16; color: #1a1a1a; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
          Visit EPCX Website
        </a>
      </div>
      
      <p style="text-align: center; color: #999; font-size: 12px; margin-top: 30px;">
        This is an automated confirmation email. Please do not reply to this message.
      </p>
    </div>
  `;

  return sendEmail({
    to: lead.email,
    subject: 'EPCX Deployment Request Received',
    html,
    text: `Thank you for your interest in EPCX. We have received your deployment request and our team will contact you within 24 hours.`,
  });
}
