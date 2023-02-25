'use strict';
const { CategorySchema,CATEGORY_TABLE } = require('./../models/category.model');
const { ProductSchema,PRODUCT_TABLE } = require('./../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE,CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE,ProductSchema);

    // await queryInterface.addConstraint(PRODUCT_TABLE, {
    //   fields: ['category_id'],
    //   type: 'foreign key',
    //   name: 'custom_fkey_constraint_categoryId', // optional
    //   references: {
    //     table: CATEGORY_TABLE,
    //     field: 'id'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // });
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};
