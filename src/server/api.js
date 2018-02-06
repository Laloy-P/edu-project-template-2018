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




//   const id = req.params.id
//
//   fs.readFile('./src/data/' + id + '.json', 'utf8', (err, data) => {
//     if (err) throw err
//
//     const episode = JSON.parse(data);
//     res.send(episode)
//   })
// });


// CREATE Episode
router.get('create/:name/:score', (req, res) => {

  const episode = {
    name: req.params.name,
    score: req.params.score,
    id: uuid.v4()
  }

  const location = './src/data/'

  fs.writeFileSync(location + episode.id + '.json', JSON.stringify(episode))

  res.send(episode)

});

// DELETE Episode
router.get('delete/:id', (req, res) => {
  const file = './src/data/' + req.params.id + '.json'

  fs.unlinkSync(file)
  res.redirect('/api/episodes')

});

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
