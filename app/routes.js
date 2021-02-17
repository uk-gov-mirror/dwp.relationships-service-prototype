const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
var project = "maternity-allowance";

// Iteration 1 *********************************************************************************************

router.post('/' + project + '/iteration-1/start', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-1/partner-details-guid?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-1/partner-details-guid', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-1/confirmation?guid=' + req.session.data['guid']);
});

// Iteration 2 *********************************************************************************************

router.post('/' + project + '/iteration-2/start', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-2/relationship-type?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-2/relationship-type', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-2/partner-details?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-2/partner-details', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-2/confirmation?guid=' + req.session.data['guid']);
});

// Iteration 3 *********************************************************************************************

router.post('/' + project + '/iteration-3/start', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-3/relationship-type?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-3/relationship-type', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-3/partner-details?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-3/partner-details', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-3/confirmation?guid=' + req.session.data['guid']);
});

module.exports = router
