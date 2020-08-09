const { Router } = require('express');
const router = Router();

const { getUsers, createUser, deleteUser } = require('../controllers/users.controllers');

router.route('/')
    .get(getUsers)
    .post(createUser)
    .delete(deleteUser)

router.route('/:id')
    .delete(deleteUser)

module.exports = router;