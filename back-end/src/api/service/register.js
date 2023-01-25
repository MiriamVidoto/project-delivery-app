const { User } = require('../../database/models');

const register = async (body) => {
  const userCreate = await User.create(body);
  if (userCreate) {
    return { status: 201, message: userCreate };
  }
  return { status: 400, message: 'user already exists'}
};

module.exports = {
  register,
};
