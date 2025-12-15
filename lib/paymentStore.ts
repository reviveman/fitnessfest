type PaymentMeta = any;

// In-memory (safe for now)
const store = new Map<string, PaymentMeta>();

export async function savePaymentMeta(txnId: string, data: PaymentMeta) {
  store.set(txnId, data);
}

export async function getPaymentMeta(txnId: string) {
  return store.get(txnId);
}

export async function deletePaymentMeta(txnId: string) {
  store.delete(txnId);
}
