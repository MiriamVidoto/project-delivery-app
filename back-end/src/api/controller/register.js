const service = require('../service/register');

const register = async (req, res) => {
  const result = await service.register(req.body);
  return res.status(result.status).json(result.message);
};

module.exports = {
  register,
};
