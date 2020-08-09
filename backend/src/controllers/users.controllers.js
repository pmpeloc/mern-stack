const userCtrl = {};

userCtrl.getUsers = (req, res) => res.send('Users')

userCtrl.createUser = (req, res) => res.send('Users Saved')

userCtrl.deleteUser = (req, res) => res.send('Users Deleted')

module.exports = userCtrl;