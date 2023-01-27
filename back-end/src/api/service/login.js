const { User } = require('../../database/models');

const login = async (body) => {
  const { email } = body;
  const user = await User.findOne({
    where: { email },
    atributes: ['name', 'email', 'password', 'role'],
    raw: true,
  });
  if (!user) {
    return { status: 404, message: 'User not found' };
  }
  return { status: 200, message: user };
};

module.exports = {
  login,
};
