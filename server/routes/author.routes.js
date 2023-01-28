const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/test', AuthorController.testApi)
    app.get('/api/authors', AuthorController.allAuthors)
    app.post('/api/authors', AuthorController.createAuthor)
    app.get('/api/author/:id', AuthorController.getOneAuthor)
    app.put('/api/author/:id', AuthorController.updateAuthor)
    app.delete('/api/author/:id', AuthorController.deleteAuthor)
}