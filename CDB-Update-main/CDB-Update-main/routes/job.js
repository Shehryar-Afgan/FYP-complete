const express = require('express');
const router = express.Router();
const jobController = require('../controller/jobs');
const { protect } = require('../middleware/auth');

router.post('/addJob', protect, jobController.add);
router.get('/viewJobs', jobController.view);
router.get('/getUserPostedJobs', protect, jobController.getUserPostedJobs);
router.post('/searchbylocation', jobController.searchByLocation);
router.get('/searchbyDate', jobController.searchByDate);
router.post('/searchbyName', jobController.searchByCompanyName);
router.delete('/delete-job/:id', protect, jobController.deleteJob);

module.exports = router;
