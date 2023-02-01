const { User } = require('../../database/models');

const getSellers = async () => {
  const sellers = await User.findAll({
    where: { role: 'seller' },
    atributes: ['name', 'id'],
    raw: true,
  });
  if (!sellers) {
    return { status: 404, message: 'Sellers not found' };
  }
  return { status: 200, message: sellers };
};

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

const adminRegister = async (token, data) => {
  const { id } = token.validate;
    const adm = await User.findOne({
    where: { id },
    attributes: ['role'],
    raw: true,
  });

  if (adm.role !== 'administrator') return { status: 401, message: 'Unauthorized' };

  const { name, email } = data;
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
  getSellers,
  adminRegister,
  register,
};
