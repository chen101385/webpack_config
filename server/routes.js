const router = require('express').Router();

router.post('/FILL_ME_IN', async (req, res) => {
  try {
    let { body: { FILL_ME_IN } } = req;
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/FILL_ME_IN/:query', async (req, res) => {
  let { params: { query } } = req;
  try {
    let results = await search(query);
    res.send(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = {
  router,
};
