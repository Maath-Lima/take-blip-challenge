const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        Msg: "Take Blip API Working",
    });
});

module.exports = router;