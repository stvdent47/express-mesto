const userRouter = require('express').Router();
const { getUsers, getUser, createUser } = require('../controllers/users.js');

userRouter.get('/', getUsers);
userRouter.get('/:userId', getUser);
userRouter.post('/', createUser);

module.exports = userRouter;
