const fs = require('fs');
const uuid = require('node-uuid');
const config = require('./config');

module.exports = {

    findAll: function() {
      return new Promise((resolve, reject) => {
        fs.readdir(config.data +'/', (err, files) => {
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
          return (fs.readFile(config.data+'/' + id + '.json', 'utf8', (err, data) => {
            if (err) {
              reject(err);
              return;
            }
          const episode = JSON.parse(data);
          resolve (episode);
        }));
       });
    },

    deleteById : function(id){
      return new Promise((resolve, reject)=>{
            const file = config.data+'/' + id + '.json';
            fs.unlinkSync(file);
            resolve("sucess");
          });

      },

      //ajouter un épisode
      addEpisode : function(episode){
        return new Promise((resolve, reject)=>{
          const location = config.data;
          fs.writeFile(config.data +'/' + episode.id + '.json', JSON.stringify(episode),(err) => {
            if (err) {
              resolve(err);
              return;
            }
            resolve(episode);
          });
        });
      }

}


function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(config.data+'/' + file, 'utf-8', (err, data) => {

      console.log(data);
      if (file != ".gitkeep") {
        resolve(JSON.parse(data));
      }
    })
  })
}
