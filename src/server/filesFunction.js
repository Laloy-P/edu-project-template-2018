// const uuid = require('node-uuid');
// const fs = require('fs');
//
// //creation d'un fichier JSON
// exports.createJson = (location, episode) => {
//   let data = JSON.stringify(episode);
//   let episodeID = uuid.v4();
//   fs.writeFileSync(location + 'episode_' + episodeID + '.json', data);
// };
//
// exports.findById = (req, res) => {
//   const id = req.params.id;
//   fs.readFile('./src/data/' + id + '.json', 'utf8', (err, data) => {
//
//     if (err) throw err;
//
//     const episode = JSON.parse(data);
//     res.send(episode);
//   });
// };
//
// exports.findAll = (req, res) => {
//   fs.readdir('./src/data/', (err, files) => {
//
//     // if (err) throw err;
//
//     files.forEach(file => {
//       console.log(file);
//     });
//   });
// };
// //liste des fichiers
// /*function findAll(
//   return new Promise((function (reslove, reject)  {
//     const path = "./src/data/";
//     fs.readdir(path, (err, files) => {
//       files.forEach(file => {
//         console.log(file);
//       });
//     }) {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve('Sucess');
//         return;
//       }
//     }
//   });
//
// )}*/
//
// /*  const path = "./src/data/";
//   fs.readdir(path, (err, files) => {
//     files.forEach(file => {
//       console.log(file);
//     })
//   })
// }*/
