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

  var relationshipType = req.session.data['relationship-type']

  if (relationshipType == 'married') {
    req.session.data.relationshipTypeFull = 'Married';
    req.session.data.relationshipPartnerName = 'spouse';
  }
  else {
    req.session.data.relationshipTypeFull = 'Civil Partnership';
    req.session.data.relationshipPartnerName = 'civil partner';
  }

//  if (over18 === 'false') {
//    res.redirect('/docs/examples/branching/under-18')
//  } else {
//    res.redirect('/docs/examples/branching/over-18')
//  }

  res.redirect(301, '/' + project + '/iteration-2/partner-details?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-2/partner-details', function (req, res) {

  var mm = req.session.data['dob-month'];

  if (mm == 1) {
    req.session.data.dobMonthFull = 'January';
  }
  else if (mm == 2) {
    req.session.data.dobMonthFull = 'February';
  }
  else if (mm == 3) {
    req.session.data.dobMonthFull = 'March';
  }
  else if (mm == 4) {
    req.session.data.dobMonthFull = 'April';
  }
  else if (mm == 5) {
    req.session.data.dobMonthFull = 'May';
  }
  else if (mm == 6) {
    req.session.data.dobMonthFull = 'June';
  }
  else if (mm == 7) {
    req.session.data.dobMonthFull = 'July';
  }
  else if (mm == 8) {
    req.session.data.dobMonthFull = 'August';
  }
  else if (mm == 9) {
    req.session.data.dobMonthFull = 'September';
  }
  else if (mm == 10) {
    req.session.data.dobMonthFull = 'October';
  }
  else if (mm == 11) {
    req.session.data.dobMonthFull = 'November';
  }
  else {
    req.session.data.dobMonthFull = 'December';
  }

  req.session.data.dateOfBirth = req.session.data['dob-month'] + " " + req.session.data.dobMonthFull + " " + req.session.data['dob-year'];

  res.redirect(301, '/' + project + '/iteration-2/confirmation?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-2/check-your-answers', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-2/confirmation?guid=' + req.session.data['guid']);
});

// Iteration 3 *********************************************************************************************

router.post('/' + project + '/iteration-3/start', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-3/relationship-type?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-3/relationship-type', function (req, res) {

  var relationshipType = req.session.data['relationship-type']

  if (relationshipType == 'married') {
    req.session.data.relationshipTypeFull = 'Married';
    req.session.data.relationshipTypeAlt = 'marriage';
    req.session.data.relationshipPartnerName = 'spouse';
  }
  else {
    req.session.data.relationshipTypeFull = 'Civil Partnership';
    req.session.data.relationshipTypeAlt = 'civil partnership';
    req.session.data.relationshipPartnerName = 'civil partner';
  }

//  if (over18 === 'false') {
//    res.redirect('/docs/examples/branching/under-18')
//  } else {
//    res.redirect('/docs/examples/branching/over-18')
//  }

  res.redirect(301, '/' + project + '/iteration-3/partner-details?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-3/partner-details', function (req, res) {

  var mm = req.session.data['dob-month'];

  if (mm == 1) {
    req.session.data.dobMonthFull = 'January';
  }
  else if (mm == 2) {
    req.session.data.dobMonthFull = 'February';
  }
  else if (mm == 3) {
    req.session.data.dobMonthFull = 'March';
  }
  else if (mm == 4) {
    req.session.data.dobMonthFull = 'April';
  }
  else if (mm == 5) {
    req.session.data.dobMonthFull = 'May';
  }
  else if (mm == 6) {
    req.session.data.dobMonthFull = 'June';
  }
  else if (mm == 7) {
    req.session.data.dobMonthFull = 'July';
  }
  else if (mm == 8) {
    req.session.data.dobMonthFull = 'August';
  }
  else if (mm == 9) {
    req.session.data.dobMonthFull = 'September';
  }
  else if (mm == 10) {
    req.session.data.dobMonthFull = 'October';
  }
  else if (mm == 11) {
    req.session.data.dobMonthFull = 'November';
  }
  else {
    req.session.data.dobMonthFull = 'December';
  }

  req.session.data.dateOfBirth = req.session.data['dob-day'] + " " + req.session.data.dobMonthFull + " " + req.session.data['dob-year'];

  res.redirect(301, '/' + project + '/iteration-3/date-of-partnership?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-3/date-of-partnership', function (req, res) {

  var mm = req.session.data['dop-month'];

  if (mm == 1) {
    req.session.data.dopMonthFull = 'January';
  }
  else if (mm == 2) {
    req.session.data.dopMonthFull = 'February';
  }
  else if (mm == 3) {
    req.session.data.dopMonthFull = 'March';
  }
  else if (mm == 4) {
    req.session.data.dopMonthFull = 'April';
  }
  else if (mm == 5) {
    req.session.data.dopMonthFull = 'May';
  }
  else if (mm == 6) {
    req.session.data.dopMonthFull = 'June';
  }
  else if (mm == 7) {
    req.session.data.dopMonthFull = 'July';
  }
  else if (mm == 8) {
    req.session.data.dopMonthFull = 'August';
  }
  else if (mm == 9) {
    req.session.data.dopMonthFull = 'September';
  }
  else if (mm == 10) {
    req.session.data.dopMonthFull = 'October';
  }
  else if (mm == 11) {
    req.session.data.dopMonthFull = 'November';
  }
  else {
    req.session.data.dopMonthFull = 'December';
  }

  req.session.data.dateOfPartnership = req.session.data['dop-day'] + " " + req.session.data.dopMonthFull + " " + req.session.data['dop-year'];

  res.redirect(301, '/' + project + '/iteration-3/confirmation?guid=' + req.session.data['guid']);
});

router.post('/' + project + '/iteration-3/check-your-answers', function (req, res) {
  res.redirect(301, '/' + project + '/iteration-3/confirmation?guid=' + req.session.data['guid']);
});

// Iteration 3 - OLD *********************************************************************************************

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
