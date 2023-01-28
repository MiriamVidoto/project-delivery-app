const crypto = require('crypto');
const { verifyToken } = require('../authentication/JWT');
const service = require('../service/adminRegister');

const adminRegister = async (req, res) => {
  const { newRegister, tokenAdmin } = req.body;
  const validateToken = verifyToken(tokenAdmin);
  if (validateToken.type === 404) return res.status(validateToken.type).json(validateToken.message);
  const password = crypto.createHash('md5').update(newRegister.password).digest('hex');
  const result = await service.adminRegister(validateToken, { ...newRegister, password });
  return res.status(result.status).json(result.message);
};

module.exports = {
  adminRegister,
};