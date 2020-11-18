const userRouter = require('express').Router();
const {
  getUsers,
  getUser,
  updateUser,
  createUser,
} = require('../controllers/users.js');

userRouter.get('/', getUsers);
userRouter.get('/:userId', getUser);
userRouter.patch('/me', updateUser);
userRouter.post('/', createUser);

module.exports = userRouter;
