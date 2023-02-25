'use strict';
const {CUSTOMER_TABLE} = require('./../models/customer.model');
const {USER_TABLE} = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addConstraint(CUSTOMER_TABLE, {
        fields: ['user_id'],
        type: 'foreign key',
        name: 'custom_fkey_constraint_userId', // optional
        references: {
          table: USER_TABLE,
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
  },

  down: async (queryInterface, Sequelize) => {

  }
};
