/**
 * Utility functions for PhonePe payment integration
 */

export interface PaymentData {
  type: 'EVENT' | 'TICKET' | 'EVENT_REGISTRATION';
  referenceId: string;
  amount: number;
  meta?: Record<string, any>;
}

export interface PaymentResponse {
  success: boolean;
  redirectUrl?: string;
  transactionId?: string;
  message?: string;
}

/**
 * Parse price string to number
 * Example: "₹1,299" -> 1299, "₹699 + GST" -> 699
 */
export function parsePrice(priceString: string): number {
  if (!priceString) return 0;
  
  // Remove currency symbol, commas, and non-numeric characters except digits
  const numericString = priceString.replace(/[₹,]/g, '').replace(/[^0-9]/g, '');
  
  return parseInt(numericString) || 0;
}

/**
 * Format amount for display
 * Example: 1299 -> "₹1,299"
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('₹', '₹');
}

/**
 * Calculate GST amount (18%)
 */
export function calculateGST(amount: number): number {
  return Math.round(amount * 0.18);
}

/**
 * Initiate PhonePe payment
 */
export async function initiatePhonePePayment(data: PaymentData): Promise<PaymentResponse> {
  try {
    const response = await fetch('/api/phonepe/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error('Payment initiation error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection.',
    };
  }
}

/**
 * Check payment status
 */
export async function checkPaymentStatus(transactionId: string): Promise<PaymentResponse> {
  try {
    const response = await fetch(`/api/phonepe/status?transactionId=${transactionId}`);
    return await response.json();
  } catch (error) {
    console.error('Status check error:', error);
    return {
      success: false,
      message: 'Unable to verify payment status.',
    };
  }
}

/**
 * Generate receipt content
 */
export function generateReceipt(paymentData: any): string {
  const {
    transactionId,
    amount,
    type,
    referenceId,
    timestamp,
  } = paymentData;

  return `
================================
       PAYMENT RECEIPT
================================

Transaction ID: ${transactionId}
Amount Paid: ₹${amount}
Payment Type: ${type}
Reference: ${referenceId}
Date: ${new Date(timestamp).toLocaleDateString()}
Time: ${new Date(timestamp).toLocaleTimeString()}
Status: ✅ SUCCESSFUL

================================
Thank you for your payment!
================================
  `.trim();
}