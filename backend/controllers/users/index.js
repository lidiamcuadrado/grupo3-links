const newUserController = require('./newUserController');
const loginUserController = require('./loginUserController');
const editAvatarController = require('./editAvatarController');
const getUserController = require('./getUserControllers');
const getPublicUserController = require('./getPublicUserController')
const updateProfileController = require('./updateProfileController')

module.exports = {
  newUserController,
  loginUserController,
  editAvatarController,
  getUserController,
  getPublicUserController,
  updateProfileController,
}