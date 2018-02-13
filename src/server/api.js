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
    const name = req.body.name;
    const num = req.body.num;
    const score = req.body.score;
    dal.addEpisode(name,num,score);
    res.redirect('/api/episodes');
  });



module.exports = router;
