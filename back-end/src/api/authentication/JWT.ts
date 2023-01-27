import { sign, verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const createToken = (data): string => {
  const token = sign(data, secret, { expiresIn: '7d' });
  return token;
};

const verifyToken = (token: string) => {
  try {
    const { id } = verify(token, secret);
    return id;
  } catch {
    return false;
  }
};

export {
  createToken,
  verifyToken,
};