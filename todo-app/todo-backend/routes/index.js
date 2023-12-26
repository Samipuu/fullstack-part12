const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

let visits = 0

router.get('/statistics', async(req, res) => {

  const counter  = await redis.getAsync('todo')
  const stats = {added_todos : counter}
  res.send(stats)
})

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
