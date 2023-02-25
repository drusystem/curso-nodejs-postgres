const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')


class CustomerService {
  constructor() {
  }

  async find() {
    const response = await models.Customer.findAll({
      include:['user']
    });
    return response;
  }

  async findOne(id) {
    const user = await models.Customer.findByPk(id);
    if(!user){
      throw boom.notFound('customer no encontrado');
    }
    return user;
  }

  async create(data) {
    const newRegister = await models.Customer.create(data,{
      include:['user']
    });
    return newRegister;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const response = await model.update(changes);
    return response;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return {id};
  }
}

module.exports = CustomerService;
