const express = require('express');
const router = express.Router(); 

const signUp = require('../controllers/loginControllers/signUp');
const login = require('../controllers/loginControllers/login');
const updatePassword = require('../controllers/loginControllers/updatePassword');

const addActivity = require('../controllers/activityControllers/addActivity')
const getActivities = require('../controllers/activityControllers/getActivities')
const getActivitiesByDate = require('../controllers/activityControllers/getActivityByDate')

const report = require('../controllers/reportControllers/report')

router.post('/signup', signUp)

router.post('/login' , login)

router.put('/login/changePassword' , updatePassword)

router.post('/activity' , addActivity);

router.get('/activities' , getActivities);

router.get('/activities/:userId/:date' , getActivitiesByDate);

router.get('/report/:userId' , report);



module.exports = router;