const service = require('../service/login');

const login = async (req, res) => {
  const result = await service.login(req.body);
  return res.status(result.status).json(result.message);
};

module.exports = {
  login,
};
