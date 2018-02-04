const fs = require('fs')
const uuid = require('node-uuid')

// GET ONE EPISODE
exports.findById = (req, res) => {
  const id = req.params.id

  fs.readFile('./src/data/' + id + '.json', 'utf8', (err, data) => {
    if (err) throw err

    const episode = JSON.parse(data);
    res.send(episode)
  })
}

// GET ALL EPISODE SOUCI
exports.findAll = (req, res) => {
  fs.readdir('./src/data', (err, files) => {
    if(err) throw err

    const tab = []

    files.forEach(file => {
      fs.readFile('./src/data/' + file, 'utf8', (err, data) => {
        if (err) throw err

        console.log(file);

      })
    })

    res.send(tab)
  })
}

// CREATE Episode
exports.create = (req, res) => {

  const episode = {
    name: req.params.name,
    score: req.params.score,
    id: uuid.v4()
  }

  const location = './src/data/'

  fs.writeFileSync(location + episode.id + '.json', JSON.stringify(episode))

  res.send(episode)

}

// DELETE Episode
exports.delete = (req, res) => {
  const file = './src/data/' + req.params.id + '.json'

  fs.unlinkSync(file)
  res.redirect('/api/episodes')

}

// UPDATE Episode
exports.update = (req, res) => {

  const episode = {
    name: req.params.name,
    score: req.params.score,
    id: req.params.id
  }

  const location = './src/data/' + req.params.id

  fs.writeFileSync(location + '.json', JSON.stringify(episode))
  res.send(episode)
}
