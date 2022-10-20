 const express= require('express');
 const router = express.Router();
 const conferenceController = require('../controllers/conferenceController');

/**
 * App Routes
*/
router.get('/',conferenceController.homepage);




 module.exports = router;