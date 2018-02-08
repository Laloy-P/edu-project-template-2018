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
  //faire en post avec req.body
  router.get('/create/:name/:num/:score', (req, res) => {
    const name = req.params.name;
    const num = req.params.num;
    const score = req.params.score;
    dal.addEpisode(name,num,score);
  });




// CREATE Episode
// router.get('create/:name/:num/:score', (req, res) => {
//
//   const episode = {
//     name: req.params.name,
//     score: req.params.score,
//     id: uuid.v4()
//   }
//
//   const location = './src/data/'
//
//   fs.writeFileSync(location + episode.id + '.json', JSON.stringify(episode))
//
//   res.send(episode)
//
// });

// DELETE Episode
// router.get('delete/:id', (req, res) => {
//   const file = './src/data/' + req.params.id + '.json'
//
//   fs.unlinkSync(file)
//   res.redirect('/api/episodes')
//
// });

// UPDATE Episode
router.get('delete/:name/:score/:id', (req, res) => {

  const episode = {
    name: req.params.name,
    score: req.params.score,
    id: req.params.id
  }

  const location = './src/data/' + req.params.id

  fs.writeFileSync(location + '.json', JSON.stringify(episode));
  res.send(episode);
});

module.exports = router;
