var express = require('express');
var router = express.Router();

var controller = require('../controllers/nightsAwayNotificationController');

router.get('/', controller.index);

router.get('/create', controller.nights_away_notification_create_get);

router.post('/create', controller.nights_away_notification_create_post);

module.exports = router;