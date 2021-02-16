const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/iteration-1/relationships/start', function (req, res) {
  res.redirect(301, '/iteration-1/maternity/partner-details-guid?guid=' + req.session.data['guid']);
});

module.exports = router
