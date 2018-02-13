const fs = require('fs');
const frisby = require('frisby');
const path = require('path');
const Joi = frisby.Joi;
const dal = require('../../src/server/dal.js');
const config = require('../../src/server/config');

const URL = `http://localhost:${process.env.SERVER_PORT}/api/episodes`;
const DATA_DIR = config.data;

function createFakeEpisode(done) {
  Promise.all([
    dal.addEpisode({"Serie":"Blindspot","Episode":"S03E02","Note":5,"id":"a5e1feef-7662-475a-bf4a-7bf494744fa9"}),
    dal.addEpisode({"Serie":"spot","Episode":"S03E02","Note":6,"id":"a5e1feef-7662-54585a-bf4a-7bf494744fa9"})
  ]).then(() => {
    done();
  });
}

function deleteFakeEpisode(done) {
  fs.readdir(DATA_DIR, (err, files) => {
    if (err) {
      done();
      throw err
    }
    for (const file of files) {
      fs.unlink(path.join(DATA_DIR, file), err => {
        if (err) {
          done();
          throw err
        };
      });
      done();
    }
  });
}

describe('Add an episode', () => {
  let id;
  it('should make an http request', (done) => {
    frisby.post(`${URL}/`, {
        Serie: "Blindspot",
        Episode: "S03E02",
        Note: 5
      })
    .expect('status', 201)
     .expect('jsonTypes', {
        'id': Joi.string().required(),
        'Serie': Joi.string().required(),
        'Episode': Joi.string().required(),
        'Note': Joi.number().required()
      }).then((res) => {
        id = res.body.id;
      })
      .done(done);
  });

  it ('should have file in data', (done) => {
      fs.stat(path.join(DATA_DIR, `${id}.json`), (err, stats) => {
        if (err  || !stats.isFile()) {
          fail();
        }
        done();
      });
  });
});

describe('Find all episodes', () => {
  it('should make an http request', (done) => {
    createFakeEpisode(done);
    frisby.get(`${URL}`)
    .expect('status', 200)
      .done(done);
      deleteFakeEpisode(done);
  });
  });

  describe('Find one episode by ID', () => {
    it('should make an http request', (done) => {
      createFakeEpisode(done);
      frisby.get(`${URL}/a5e1feef-7662-475a-bf4a-7bf494744fa9`)
      .expect('status', 200)
        .done(done);
        deleteFakeEpisode(done);
    });
    });

    describe('Delete episode', () => {
      it('should make an http request', (done) => {
        createFakeEpisode(done);
        frisby.del(`${URL}/a5e1feef-7662-475a-bf4a-7bf494744fa9`)
        .expect('status', 204)
          .done(done);
          deleteFakeEpisode(done);
      });
      });
