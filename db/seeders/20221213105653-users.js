'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        id: "878580d8-f966-4bf4-9263-5f044d148e9c",
        email: "example1@example.com",
        nickname: "johndoe1",
        password:
          "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
        //TODO:
        // avatar:
        // description:
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "fbb4e25c-309f-4100-9bbd-9188562b4a0f",
        email: "admin@gmail.com",
        nickname: "admin",
        password:
          "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq", // password
        //TODO:
        // avatar:
        // description:
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  }
};
