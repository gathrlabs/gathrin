// Initializes the `todos` service on path `/todos`
const createService = require('feathers-mongodb');
const hooks = require('./todos.hooks');
const filters = require('./todos.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/todos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('todos');

  mongoClient.then(db => {
    service.Model = db.collection('todos');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
