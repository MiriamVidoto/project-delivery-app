const { User } = require('../../database/models');

const adminRegister = async (token, data) => {
  const { id } = token.validate;
    const adm = await User.findOne({
    where: { id },
    attributes: ['role'],
    raw: true,
  });

  if (adm.role !== 'administrator') return { status: 401, message: 'Unauthorized' };

  const { name, email, } = data;
  const user = await User.findOne({
    where: { name, email },
    attributes: ['name', 'email'],
    raw: true,
  });

  if (user) return { status: 409, message: 'Conflict' }; 
  
  const userCreate = await User.create(data);
  return { status: 201, message: userCreate };
};

module.exports = {
  adminRegister,
};