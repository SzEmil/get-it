export const cutDate = (date: string | null | undefined) => {
  const year = date!.slice(0, 10);
  const time = date!.slice(11, 16);

  return `${year}  ${time}`;
};

export const formatDate = (date: Date) => {
  const paymentDate = parseDate(date);

  if (paymentDate) {
    const formattedPaymentDate = paymentDate.toISOString().split('T')[0];
    return new Date(formattedPaymentDate);
  }
  return "-"
};

const parseDate = (date: any): Date | null => {
  if (!date) return null;
  const parsedDate = new Date(date);
  return isNaN(parsedDate.getTime()) ? null : parsedDate;
};


export function formatInvoiceDate(dateInput?: string | Date): string {
  if (!dateInput) return '';
  
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) {
    // Niepoprawna data
    return '';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}