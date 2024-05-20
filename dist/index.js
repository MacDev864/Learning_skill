"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));
var _express = _interopRequireDefault(require("express"));
var _routes = _interopRequireDefault(require("./routes"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use("/api/v1", _routes["default"]);
app.listen(3000, function () {
  console.log("http//localhost::3000");
  _mongoose["default"].connect("mongodb+srv://conan00789:IhurzCFdPhOGlJ1D@cluster0.qqwoofi.mongodb.net/learning_skill_Api");
});