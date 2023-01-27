const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key');

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const createToken = (data) => {
  const token = jwt.sign({ id: data.id, name: data.name }, secret, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  try {
    const validate = jwt.verify(token, secret);
    return { type: null, validate };
  } catch (error) {
    return { type: 404, message: { message: 'Invalid token' } };
  }
};

module.exports = {
  createToken,
  verifyToken,
};
