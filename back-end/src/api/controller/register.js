const crypto = require('crypto');
const service = require('../service/register');

const register = async (req, res) => {
  const password = crypto.createHash('md5').update(req.body.password).digest('hex');
  const result = await service.register({ ...req.body, password });
  return res.status(result.status).json(result.message);
};

module.exports = {
  register,
};
