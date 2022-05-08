const router = require("express").Router();

const userController = require('../controllers/user.controller');

module.exports = app => {
  // Create a new User
  router.post("/", userController.create);

  // Retrieve all Users
  router.get("/", userController.findAll);

  // Retrieve a single User with id
  router.get("/:id", userController.findOne);

  // Update a User with id
  router.put("/:id", userController.update);

  // Delete a User with id
  router.delete("/:id", userController.delete);

  app.use('/api/users', router);

  // error handler
  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    });
    next();
  });
};
