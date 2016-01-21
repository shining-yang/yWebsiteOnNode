var controllers = require('../controllers');

exports.setup = function (app) {
  app.get('/', controllers.home.get);
  app.get('/wx', controllers.wechat.get);
  app.post('/wx', controllers.wechat.post);
};