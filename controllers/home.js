//
// Get the home page
//
exports.get = function (req, res) {
  res.render('index', {
    title: 'Welcome'
  });
};