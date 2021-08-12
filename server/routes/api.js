var express = require('express');
var router = express.Router();
// const firebase = require("firebase");
const phonebooks = require("../apiController/phonebooks")


router.get('/', phonebooks.phonebooksRead)
router.post('/', phonebooks.phonebooksCreate) 
router.put('/:id', phonebooks.phonebooksUpdate)
router.delete('/:id', phonebooks.phonebooksDelete)

module.exports = router;
