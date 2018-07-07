const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.resolve(__dirname, '../public')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function(req, res, next) {
  const err = new Error('Not Found!');
  err.status = 404;
  next(err)
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(3000, function() {
  console.log('listening on 3000!')
})
