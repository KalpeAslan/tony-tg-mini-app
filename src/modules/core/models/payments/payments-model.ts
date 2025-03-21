/**
 * Interface for payment invoice request
 */
export interface PaymentInvoiceRequest {
  bostId: string;
}

/**
 * Interface for stars payment invoice response
 */
export interface StarsPaymentInvoiceResponse {
  paymentLink: string;
}

/**
 * Interface for TON payment invoice response
 */
export interface TonPaymentInvoiceResponse {
  paymentLink: string;
} 