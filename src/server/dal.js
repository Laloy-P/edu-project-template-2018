const fs = require('fs')

module.exports = {

    findAll: function() {
      return new Promise((resolve, reject) => {
        fs.readdir('./src/data', (err, files) => {
          if (err) {
            reject(err);
            return;
          }
          return Promise.all(
            files.map((file) => {
              return readFile(file);
            })
          ).then((episodes) => {
            resolve(episodes);
          });
        })
      });
    },

    //get one episode
    findById: function(id){

      return new Promise((resolve, reject)=>{

          return (fs.readFile('./src/data/' + id + '.json', 'utf8', (err, data) => {
            if (err) {
              reject(err);
              return;
            }
          const episode = JSON.parse(data);
        }));



      }).then((episode) =>{
        resolve(episode);
      });
    }
}


function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile('./src/data/' + file, 'utf-8', (err, data) => {

      console.log(data);
      if (file != ".gitkeep") {
        resolve(JSON.parse(data));
      }
    })
  })
}
