'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //TODO:
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("likes", null, {});
  }
};
