const { User } = require('../../database/models');

const register = async (body) => {
  const { name, email } = body;
  const user = await User.findOne({
    where: { name, email },
    attributes: ['name', 'email'],
    raw: true,
  });
  if (!user) {
  const userCreate = await User.create(body);
  return { status: 201, message: userCreate };
  }
  return { status: 409, message: 'Conflict' };
};

module.exports = {
  register,
};
