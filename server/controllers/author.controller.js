const Author = require('../models/author.model')

module.exports.testApi = (req, res) => {
    res.json({status: "Test successful"})
}

module.exports.createAuthor = (req, response) => {
    Author.create(req.body)
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err))
}

module.exports.allAuthors = (req, res) => {
    Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.json(err))
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(oneauth => res.json(oneauth))
    .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, response) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
    .then(updatedValue => response.json(updatedValue))
    .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}
