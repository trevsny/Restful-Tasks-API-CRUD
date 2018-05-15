const mongoose = require('mongoose');
var tasks = require('../controllers/tasks.js');

module.exports = (app) => {

    app.get('/tasks', tasks.index)
    app.get('/tasks/:id', tasks.show)
    app.post('/tasks/new', tasks.create)
    app.get('/tasks/:id/edit', tasks.edit)
    app.put('/tasks/:id', tasks.update)
    app.delete('/tasks/:id', tasks.destroy)
}