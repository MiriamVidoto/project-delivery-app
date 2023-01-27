const { createToken } = require('../authentication/JWT');
const service = require('../service/login');

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

module.exports = {
  login,
};
