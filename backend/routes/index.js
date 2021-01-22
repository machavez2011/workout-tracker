const router = require('express').Router();
const workoutRouter = require('./workouts');
// const exercisesRouter = require('./exercises');
const usersRouter = require('./users');
const categoriesRouter = require('./categories');

router.use('/api/workouts', workoutRouter);
// router.use('/api/exercises', exercisesRouter);
router.use('/api/users', usersRouter);
router.use('/api/categories', categoriesRouter);

module.exports = router;