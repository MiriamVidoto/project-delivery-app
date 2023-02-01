const crypto = require('crypto');
const { verifyToken } = require('../authentication/JWT');
const service = require('../service/users');

const getSellers = async (req, res) => {
  const result = await service.getSellers();
  return res.status(result.status).json(result.message);
};

const register = async (req, res) => {
  const password = crypto.createHash('md5').update(req.body.password).digest('hex');
  const result = await service.register({ ...req.body, password });
  return res.status(result.status).json(result.message);
};

const adminRegister = async (req, res) => {
  const { newRegister } = req.body;
  const { authorization } = req.headers;
  const validateToken = verifyToken(authorization);
  if (validateToken.type === 404) return res.status(validateToken.type).json(validateToken.message);
  const password = crypto.createHash('md5').update(newRegister.password).digest('hex');
  const result = await service.adminRegister(validateToken, { ...newRegister, password });
  return res.status(result.status).json(result.message);
};

module.exports = {
  getSellers,
  adminRegister,
  register,
};
