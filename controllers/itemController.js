const db = require("../models");


module.exports = {
    findAll: function(req, res) {
      console.log()

      db.Item
        .find(req.query)
        // .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Item
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log("hello from create inside itemcontroller.");
      console.log(req.body);
      db.Item
        .create(req.body)
        .then( function(dbModel){
          console.log ("dbmodel is: " + dbModel);
          res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Item
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Item
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };