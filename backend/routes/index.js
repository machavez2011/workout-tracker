const router = require('express').Router();
const workoutRouter = require('./workout');
// const exercisesRouter = require('./exercises');
const usersRouter = require('./users');

router.use('/api/workouts', workoutRouter);
// router.use('/api/exercises', exercisesRouter);
router.use('/api/users', usersRouter);

module.exports = router;