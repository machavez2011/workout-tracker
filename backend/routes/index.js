const router = require('express').Router();
const exercisesRouter = require('./exercises');
const usersRouter = require('./users');

router.use('/exercises', exercisesRouter);
router.use('/users', usersRouter);

module.exports = router;