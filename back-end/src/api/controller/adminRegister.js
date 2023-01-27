const crypto = require('crypto');
const service = require('../service/adminRegister');

const adminRegister = async (req, res) => {
  const { newRegister, tokenAdmin } = req.body;
  const password = crypto.createHash('md5').update(newRegister.password).digest('hex');
  const result = await service.adminRegister(tokenAdmin, { ...newRegister, password });
  return res.status(result.status).json(result.message);
};

module.exports = {
  adminRegister,
};