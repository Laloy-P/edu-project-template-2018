const fs = require('fs');
const uuid = require('node-uuid');

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
          resolve (episode);
        }));
       });
    },

    deleteById : function(id){
      return new Promise((resolve, reject)=>{
            const file = './src/data/' + id + '.json';
            fs.unlinkSync(file);
            resolve("sucess");
          });

      },

      // addEpisode : function(name,num,score){
      //   //le faire en passant avec le body
      //   return new Promise((resolve, reject)=>{
      //     const id = uuid.v4();
      //     const episode = {
      //       Serie : this.name,
      //       Episode : this.num,
      //       Note : this.score,
      //       id: this.id
      //     };
      //     const location = './src/data/';
      //     fs.writeFileSync(location + id + '.json', JSON.stringify(episode));
      //     if (err) {
      //       reject(err);
      //       return;
      //     }
      //     resolve('sucess');
      //   })
      // }

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
