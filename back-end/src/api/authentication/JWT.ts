// const jwt = require('jsonwebtoken');
// const { sign, verify } = jwt;

// const secret = process.env.JWT_SECRET || 'seusecretdetoken';

// const createToken = (data) => {
//   const token = sign({ data }, secret, { expiresIn: '7d' });
//   return token;
// };

// const verifyToken = (token) => {
//   try {
//     const { id } = verify(token, secret);
//     return id;
//   } catch {
//     return false;
//   }
// };

// module.exports = {
//   createToken,
//   verifyToken,
// };
