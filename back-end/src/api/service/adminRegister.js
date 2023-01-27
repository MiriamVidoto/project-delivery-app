const { User } = require('../../database/models');

const adminRegister = async (password, data) => {
  const { name, email, } = data;

  const user = await User.findOne({
    where: { name, email },
    attributes: ['name', 'email'],
    raw: true,
  });

  // const validateToken = await User.findOne({
  //   where: { password },
  //   attributes: ['password', 'role'],
  //   raw: true,
  // });

  if (!user) {
  const userCreate = await User.create(data);
  return { status: 201, message: userCreate };
  }
  return { status: 409, message: 'Conflict' };
};

module.exports = {
  adminRegister,
};