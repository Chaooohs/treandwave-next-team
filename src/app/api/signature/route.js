import crypto from 'crypto';

export async function POST(req) {
  const body = await req.json();

  const {
    merchantAccount,
    merchantDomainName,
    orderReference,
    orderDate,
    amount,
    currency,
    productName,
    productPrice,
    productCount
  } = body;

  // Строка для формирования сигнатури
  const dataToSign = [
    merchantAccount,
    merchantDomainName,
    orderReference,
    orderDate,
    amount,
    currency,
    ...productName,
    ...productCount,
    ...productPrice,
  ].join(';');

  // Секретный ключ
  const secretKey = process.env.SECRET_KEY;

  // Генерация подписи через HMAC_MD5
  const merchantSignature = crypto
    .createHmac('md5', secretKey)
    .update(dataToSign)
    .digest('hex');

  return new Response(JSON.stringify({ signature: merchantSignature }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}