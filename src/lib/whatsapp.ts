// WhatsApp notification service structure for future integration
// This provides the structure for WhatsApp Business API integration
// To enable: Set WHATSAPP_API_KEY, WHATSAPP_PHONE_NUMBER_ID in environment variables

interface WhatsAppMessage {
  to: string;
  templateName?: string;
  templateLanguage?: string;
  components?: Record<string, unknown>[];
  text?: string;
}

export async function sendWhatsAppMessage(message: WhatsAppMessage): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.WHATSAPP_API_KEY;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  
  if (!apiKey || !phoneNumberId) {
    console.warn('WhatsApp API credentials not set. WhatsApp notifications disabled.');
    return { success: false, error: 'WhatsApp service not configured' };
  }

  try {
    const response = await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: message.to,
        type: message.templateName ? 'template' : 'text',
        ...(message.templateName ? {
          template: {
            name: message.templateName,
            language: {
              code: message.templateLanguage || 'en_US',
            },
            components: message.components || [],
          },
        } : {
          text: {
            body: message.text || '',
          },
        }),
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`WhatsApp API error: ${error}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send WhatsApp message:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Send WhatsApp notification to admin about new deployment request
export async function sendAdminWhatsAppNotification(lead: {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectType: string;
  workforceSize: string;
}): Promise<{ success: boolean; error?: string }> {
  const adminPhone = process.env.ADMIN_WHATSAPP_NUMBER;
  
  if (!adminPhone) {
    return { success: false, error: 'Admin WhatsApp number not configured' };
  }

  const text = `
🚀 *New EPCX Deployment Request*

*Name:* ${lead.name}
*Company:* ${lead.company}
*Phone:* ${lead.phone}
*Email:* ${lead.email}

*Project Details:*
• Type: ${lead.projectType}
• Workforce: ${lead.workforceSize}

📱 Contact: ${lead.phone}
📧 Email: ${lead.email}

View in Admin Dashboard: https://epcx.site/admin/leads
  `.trim();

  return sendWhatsAppMessage({
    to: adminPhone,
    text,
  });
}

// Send WhatsApp confirmation to user
export async function sendUserWhatsAppConfirmation(phone: string, name: string): Promise<{ success: boolean; error?: string }> {
  const text = `
✅ *EPCX Deployment Request Received*

Dear ${name},

Thank you for your interest in EPCX. We have received your deployment request and our team will contact you within 24 hours.

For urgent queries:
📞 +91 83695 32599
📧 madhu@epcx.site

Visit: https://epcx.site
  `.trim();

  return sendWhatsAppMessage({
    to: phone,
    text,
  });
}

// Format phone number for WhatsApp API
export function formatPhoneNumberForWhatsApp(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Ensure it starts with country code (default to India if not specified)
  if (cleaned.startsWith('0')) {
    return '91' + cleaned.substring(1);
  }
  
  if (!cleaned.startsWith('91') && cleaned.length === 10) {
    return '91' + cleaned;
  }
  
  return cleaned;
}
