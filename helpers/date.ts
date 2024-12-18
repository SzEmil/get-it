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
