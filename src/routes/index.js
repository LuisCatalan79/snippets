const express = require('express');
const countryRouter = require('./country.routers');
const cityRouter = require('./city.routers');
const userRouter = require('./user.routers');
const router = express.Router();

router.use(countryRouter)
router.use(cityRouter)
router.use(userRouter)

module.exports = router;