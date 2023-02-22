const crypto = require('crypto');
const { verifyToken, createToken } = require('../authentication/JWT');
const service = require('../services/users.service');

const login = async (req, res) => {
  const result = await service.login(req.body);
  const { id, name, email, role } = result.message;
  const token = createToken({ id, name });
  return res.status(result.status).json({
    id, 
    name,
    email,
    role,
    token,
  });
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

const getSellers = async (_req, res) => {
  const result = await service.getSellers();
  return res.status(result.status).json(result.message);
};

module.exports = {
  login,
  getSellers,
  adminRegister,
  register,
};
