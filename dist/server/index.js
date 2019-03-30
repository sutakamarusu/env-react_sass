"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ★ 追加
var app = (0, _express.default)();
app.use(_express.default.static(_path.default.join(__dirname, '../public'))); // ★ 追加

app.get('/hello', function (req, res) {
  res.json({
    message: 'Hello from Node'
  });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server listening on port ".concat(PORT));
});