const fs = require('fs')
const uuid = require('node-uuid')
const express = require('express');
const router = express.Router();
const dal = require('./dal.js');

// GET ALL EPISODE
router.get('/', (req, res) => {

  dal.findAll().then((episodes) => {
    console.log(episodes);
    res.send(episodes);
  }).catch(function (e){
    console.log(e);
  });
});

// GET ONE EPISODE
router.get('/:id', (req, res) => {

  const id = req.params.id
  dal.findById(id).then((episode) => {
      console.log(episode);
      res.send(episode);
    }).catch(function(e) {
      console.log(e);
    });
  });

  // DELETE ONE EPISODE
  router.delete('/:id', (req, res) => {

    const id = req.params.id;
    dal.deleteById(id);
    res.redirect('/api/episodes');
  });

  //ADD ONE EPISODE
  router.post('/', (req, res) => {
    const episode = req.body;
    episode.id = uuid.v4();
    dal.addEpisode(episode).then((episode) => {
        res.status(201);
        res.send(episode)
    }).catch((err) => {
      res.status(500);
      res.send(err.message);
    });
  });



module.exports = router;
