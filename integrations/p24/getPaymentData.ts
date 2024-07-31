"use server";

export const getPaymentData = async (url: string, body?: object) => {
  const res = await fetch(
    `https://${
      process.env.PAYMENT_SANDBOX_MODE ? "sandbox" : "secure"
    }.przelewy24.pl/api/v1/${url}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(
          `${process.env.PAYMENT_POS_ID}:${process.env.PAYMENT_API_KEY}`,
        )}`,
      },
      body: JSON.stringify(body),
    },
  );
  return await res.json();
};
