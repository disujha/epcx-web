import { NextRequest, NextResponse } from 'next/server';
import { saveDeploymentRequest } from '@/lib/firebase';
import { sendAdminNotification, sendUserConfirmation } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      company,
      phone,
      email,
      projectType,
      workforceSize,
      message,
      preferredContactMethod,
      currentSystem,
      deploymentTimeline,
      whatsappOptIn,
    } = body;

    // Validate required fields
    if (!name || !company || !phone || !email || !projectType || !workforceSize) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Firestore
    const result = await saveDeploymentRequest({
      name,
      company,
      phone,
      email,
      projectType,
      workforceSize,
      message,
      preferredContactMethod,
      currentSystem,
      deploymentTimeline,
      whatsappOptIn,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    // Send email notifications (non-blocking)
    // Admin notification
    sendAdminNotification({
      name,
      company,
      phone,
      email,
      projectType,
      workforceSize,
      message,
      preferredContactMethod,
      currentSystem,
      deploymentTimeline,
    }).catch(error => {
      console.error('Failed to send admin notification:', error);
    });

    // User confirmation email
    sendUserConfirmation({
      name,
      email,
    }).catch(error => {
      console.error('Failed to send user confirmation:', error);
    });

    return NextResponse.json({ 
      success: true, 
      id: result.id,
      message: 'Deployment request submitted successfully' 
    });

  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
